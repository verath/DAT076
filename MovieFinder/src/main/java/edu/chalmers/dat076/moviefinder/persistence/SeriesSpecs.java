/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package edu.chalmers.dat076.moviefinder.persistence;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import org.springframework.data.jpa.domain.Specification;

/**
 *
 * @author Carl Jansson
 */
public class SeriesSpecs {
    
    /**
     * 
     * @param imdbRating
     * @return All Series with a rating equal to or above imdbRating
     */
    public static Specification<Series> hasImdbRatingAbove(final double imdbRating){
        return new Specification<Series>(){
            @Override
            public Predicate toPredicate(Root<Series> root, CriteriaQuery<?> cq, CriteriaBuilder cb) {
                return cb.greaterThanOrEqualTo(root.get(Series_.imdbRating), imdbRating);
            }
    };
    }
    
    /**
     * 
     * @param releaseYear
     * @return All series first released the year releaseYear
     */
    public static Specification<Series> hasReleaseYear(final int releaseYear){
        return new Specification<Series>(){
            @Override
            public Predicate toPredicate(Root<Series> root, CriteriaQuery<?> cq, CriteriaBuilder cb) {
                return cb.equal(root.get(Series_.releaseYear), releaseYear);
            }
    };
    }
    
    
}
