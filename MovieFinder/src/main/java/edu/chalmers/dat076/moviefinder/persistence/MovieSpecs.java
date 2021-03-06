/* 
 * The MIT License
 *
 * Copyright 2014 Anton, Carl, John, Peter.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
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
public class MovieSpecs {
    
    /**
     * 
     * @param imdbRating
     * @return returns all movies with a rating equal to or above imdbRating.
     */
    public static Specification<Movie> hasImdbRatingAbove(final double imdbRating){
        return new Specification<Movie>(){
            @Override
            public Predicate toPredicate(Root<Movie> root, CriteriaQuery<?> cq, CriteriaBuilder cb) {
                return cb.greaterThanOrEqualTo(root.get(Movie_.imdbRating), imdbRating);
            }
    };
    }
    
    /**
     * 
     * @param runtime
     * @return All movies with an runtime equal to or above runtime.
     */
    public static Specification<Movie> hasRuntimeAbove(final int runtime){
        return new Specification<Movie>(){
            @Override
            public Predicate toPredicate(Root<Movie> root, CriteriaQuery<?> cq, CriteriaBuilder cb) {
                return cb.greaterThanOrEqualTo(root.get(Movie_.runtime), runtime);
            }
    };
    }
    
    /**
     * 
     * @param releaseYear
     * @return All movies with the release year releaseYear.
     */
    public static Specification<Movie> hasReleaseYear(final int releaseYear){
        return new Specification<Movie>(){
            @Override
            public Predicate toPredicate(Root<Movie> root, CriteriaQuery<?> cq, CriteriaBuilder cb) {
                return cb.equal(root.get(Movie_.releaseYear), releaseYear);
            }
    };
    }
    
    
}
