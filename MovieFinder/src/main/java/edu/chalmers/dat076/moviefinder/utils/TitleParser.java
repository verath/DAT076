/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.chalmers.dat076.moviefinder.utils;

import java.util.ArrayList;

/**
 * A class for parsing movie and series file names and derive a title.
 *
 * @author Carl Jansson
 */
public class TitleParser {

    private StringBuilder sb;

    private final ArrayList<String> finalWords = new ArrayList<String>() {
        {
            add("1080p");add("720p");add("1920x1080");add("1280x720");
            add("mp4");add("avi");add("mkv");
            add("Bluray");add("BrRip");add("WEBRip");add("HDTV");add("Blu-ray");add("FLAC");
            add("AC3");add("h264");add("AAC");add("xvid");add("divx");add("x264");
            //add("");add("");add("");add("");add("");add("");
        }
    };

    //Default constructor. Do we want this or strictly util class?
    public TitleParser() {
        sb = new StringBuilder();
    }

    /**
     * Parses a String and tries to derive a comprehensive movie or series title
     * from it.
     *
     * @param fileName The file name to be parsed
     * @return a hopefully better String
     */
    public String parseTitle(String fileName) {
        if (fileName.isEmpty()) {
            throw new IllegalArgumentException();
        }
        
        sb.setLength(0);
        sb.append(fileName);

        if (sb.charAt(0) == '[') {
            removeUntil(sb, 0, ']');
        }

        removeFormating(sb);

        return sb.toString().trim();
    }

    /**
     * This method kind of controls everything...
     *
     * @param mySb
     */
    public void removeFormating(StringBuilder mySb) {

        StringBuilder wordSb = new StringBuilder();

        boolean finalWord = true;

        for (int i = 0; i < mySb.length(); i++) {
            if (mySb.charAt(i) == '.' || mySb.charAt(i) == '-' || mySb.charAt(i) == '_' || mySb.charAt(i) == ' ') {

                if (finalWords.contains(wordSb.toString())) {
                    mySb.delete(i - (wordSb.length() + 1), mySb.length());
                    finalWord = false;
                    break;
                }
                mySb.replace(i, i + 1, " ");
                wordSb.setLength(0);

            } else if (mySb.charAt(i) == '[') {
                
                if (finalWords.contains(wordSb.toString())) {
                    mySb.delete(i - (wordSb.length() + 1), mySb.length());
                    finalWord = false;
                    break;
                }
                wordSb.setLength(0);
                
                //TODO Check if bracket contains something worth saving!!! 
                removeUntil(mySb, i, ']');
                i--; // Need to compensate for removing the bracket.
            } else if (mySb.charAt(i) == '(') {
                
                if (finalWords.contains(wordSb.toString())) {
                    mySb.delete(i - (wordSb.length() + 1), mySb.length());
                    finalWord = false;
                    break;
                }
                wordSb.setLength(0);
                
                //TODO Check if bracket contains something worth saving!!! 
                removeUntil(mySb, i, ')');
                i--; // Need to compensate for removing the bracket.
            } else {
                wordSb.append(mySb.charAt(i));
            }
        }
        if (finalWord && finalWords.contains(wordSb.toString())) {
            mySb.delete(mySb.length() - wordSb.length(), mySb.length());
        }
    }
    
    
    
    
    /**
     * Removes everything starting from index n until the char c.
     *
     * @param mySb
     * @param n
     * @param c
     */
    public void removeUntil(StringBuilder mySb, int n, char c) {
        for (int i = n; i <= mySb.length(); i++) {
            if (mySb.charAt(i) == c) {
                mySb.delete(n, i + 1);
                break;
            }
        }
    }
    
    
    public Episode getEpisodeInfo(StringBuilder mySb) {

        int season = -1;
        int episode = -1;
        if (mySb.charAt(0) == 'S' || mySb.charAt(0) == 's') {

            // Season 01 Episode 01
            if (mySb.substring(0, 6).equalsIgnoreCase("season")) {

                mySb.delete(0, 6);

                season = returnNextNumber(mySb);
                
                for (int i = 0; i < mySb.length()-7; i++) {
                    if (mySb.substring(i, i+7).equalsIgnoreCase("episode")) {
                        mySb.delete(0, i+7);
                        break;
                    }
                }
                episode = returnNextNumber(mySb);
                
                
            }
            //TODO S01E03
            
            
            
        } else if ('0' <= mySb.charAt(0) && mySb.charAt(0) <= '9') {
            //TODO check for info in some.series.3x01.blablabla.720p_hdtv_x264-fov.mkv
        }

        return new Episode(season, episode);
    }
    
    /**
     * returns next number in mySb and deletes it and everything before it in mySb.
     * @param mySb
     * @return 
     */
    public int returnNextNumber(StringBuilder mySb) {
        int tmp = -1;
        boolean deleteAll = true;

        for (int i = 0; i < mySb.length(); i++) {

            // Character.isDigit(i) better or worse?
            if ('0' <= mySb.charAt(i) && mySb.charAt(i) <= '9') {
                if (tmp<0){
                    tmp = 0;
                }
                tmp = tmp * 10;
                tmp = tmp + Character.getNumericValue(mySb.charAt(i));
            } else if (tmp > 0 && !Character.isDigit(mySb.charAt(i))) {
                mySb.delete(0, i);
                deleteAll = false;
                break;
            }
        }
        if ( deleteAll && tmp>0 ){
            mySb.setLength(0);
        }
        return tmp;
    }
    
    
    public class Episode{
        private final int season;
        private final int episode;
        public Episode(int s, int e){
            this.season=s;
            this.episode=e;
        }
        public int getSeason(){ return season; }
        public int getEpisode(){ return episode; }
    }
}
