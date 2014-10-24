/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.chalmers.dat076.moviefinder.model;

import java.util.List;

/**
 *
 * @author John
 */
public class TraktShow {

    private String title;
    private int year;
    private String url;
    private long firstAired;
    private String firstAiredIso;
    private long firstAiredUtc;
    private String country;
    private String overview;
    private int runtime;
    private String network;
    private String air_day;
    private String air_time;
    private String certification;
    private String imdbId;
    private int tvdbId;
    private int tvrageId;
    private TraktImages images;
    private TraktRatings ratings;
    private List<String> genres;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getOverview() {
        return overview;
    }

    public void setOverview(String overview) {
        this.overview = overview;
    }

    public int getRuntime() {
        return runtime;
    }

    public void setRuntime(int runtime) {
        this.runtime = runtime;
    }

    public String getNetwork() {
        return network;
    }

    public void setNetwork(String network) {
        this.network = network;
    }

    public String getAir_day() {
        return air_day;
    }

    public void setAir_day(String air_day) {
        this.air_day = air_day;
    }

    public String getAir_time() {
        return air_time;
    }

    public void setAir_time(String air_time) {
        this.air_time = air_time;
    }

    public String getCertification() {
        return certification;
    }

    public void setCertification(String certification) {
        this.certification = certification;
    }

    public TraktImages getImages() {
        return images;
    }

    public void setImages(TraktImages images) {
        this.images = images;
    }

    public TraktRatings getRatings() {
        return ratings;
    }

    public void setRatings(TraktRatings ratings) {
        this.ratings = ratings;
    }

    public List<String> getGenres() {
        return genres;
    }

    public void setGenres(List<String> genres) {
        this.genres = genres;
    }

    public long getFirstAired() {
        return firstAired;
    }

    public void setFirstAired(long firstAired) {
        this.firstAired = firstAired;
    }

    public String getFirstAiredIso() {
        return firstAiredIso;
    }

    public void setFirstAiredIso(String firstAiredIso) {
        this.firstAiredIso = firstAiredIso;
    }

    public long getFirstAiredUtc() {
        return firstAiredUtc;
    }

    public void setFirstAiredUtc(long firstAiredUtc) {
        this.firstAiredUtc = firstAiredUtc;
    }

    public String getImdbId() {
        return imdbId;
    }

    public void setImdbId(String imdbId) {
        this.imdbId = imdbId;
    }

    public int getTvdbId() {
        return tvdbId;
    }

    public void setTvdbId(int tvdbId) {
        this.tvdbId = tvdbId;
    }

    public int getTvrageId() {
        return tvrageId;
    }

    public void setTvrageId(int tvrageId) {
        this.tvrageId = tvrageId;
    }

    @Override
    public String toString() {
        return "TraktShow{" + "title=" + title + ", year=" + year + ", url=" + url + ", firstAired=" + firstAired + ", firstAiredIso=" + firstAiredIso + ", firstAiredUtc=" + firstAiredUtc + ", country=" + country + ", overview=" + overview + ", runtime=" + runtime + ", network=" + network + ", air_day=" + air_day + ", air_time=" + air_time + ", certification=" + certification + ", imdbId=" + imdbId + ", tvdbId=" + tvdbId + ", tvrageId=" + tvrageId + ", images=" + images + ", ratings=" + ratings + ", genres=" + genres + '}';
    }

}
