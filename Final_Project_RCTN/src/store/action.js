import axios, { Axios } from 'axios'


export const getAllMovies = (paramsOption = "popular") => {
    return async (dispatch) => {
        try {
            const options = {
                method: 'GET',
                url: `https://api.themoviedb.org/3/movie/${paramsOption}`,
                params: {language: 'en-US', page: '1'},
                headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Yjk2MGMwMDI1ZGQzNzY5ODQ3OWE5ZWEyMThlZTk2YSIsIm5iZiI6MTczNjk5NDk0Mi4xNTI5OTk5LCJzdWIiOiI2Nzg4NzA3ZTFkNGM5MWY2YWM5NzZjNzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.7WDyY-_khw-HK9L56XxX7XuSBD3Ww_HdFqCHVs6AVCo'
                }
            };
            axios
                .request(options)
                .then(res => {
                    console.log(res.data.results, "===> ini datanya");
                    
                    dispatch({
                        type: "CHANGE_DATA_MOVIES",
                        payload: res.data.results
                    })
                    
                })
                .catch(err => console.error(err));
        } catch (error) {
            
        }
    }
}

export const searchMovies = (paramQuery) => {
    return async (dispatch) => {
        try {
            const options = {
                method: 'GET',
                url: 'https://api.themoviedb.org/3/search/movie',
                params: {
                    query: paramQuery,
                    include_adult: 'false',
                    language: 'en-US',
                    page: '1'
                },
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Yjk2MGMwMDI1ZGQzNzY5ODQ3OWE5ZWEyMThlZTk2YSIsIm5iZiI6MTczNjk5NDk0Mi4xNTI5OTk5LCJzdWIiOiI2Nzg4NzA3ZTFkNGM5MWY2YWM5NzZjNzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.7WDyY-_khw-HK9L56XxX7XuSBD3Ww_HdFqCHVs6AVCo'
                }
            };
            axios
                .request(options)
                .then(res => {
                    console.log(res.data.results, "===> ini data Search");
                    
                    dispatch({
                        type: "CHANGE_DATA_MOVIES",
                        payload: res.data.results
                    })
                    
                })
                .catch(err => console.error(err));
        } catch (error) {
            
        }
    }
}

export const getDetailMovies = (id) => {
    return async (dispatch) => {
        try {
            const options = {
                method: 'GET',
                url: `https://api.themoviedb.org/3/movie/${id}`,
                params: {language: 'en-US'},
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Yjk2MGMwMDI1ZGQzNzY5ODQ3OWE5ZWEyMThlZTk2YSIsIm5iZiI6MTczNjk5NDk0Mi4xNTI5OTk5LCJzdWIiOiI2Nzg4NzA3ZTFkNGM5MWY2YWM5NzZjNzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.7WDyY-_khw-HK9L56XxX7XuSBD3Ww_HdFqCHVs6AVCo'
                }
            };
            axios
                .request(options)
                .then(res => {
                    console.log(res.data, "===> INI DATA DETAIL");
                    
                    dispatch({
                        type: "CHANGE_DETAIL_MOVIES",
                        payload: res.data
                    })
                    
                })
                .catch(err => console.error(err));
        } catch (error) {
            
        }
    }
}