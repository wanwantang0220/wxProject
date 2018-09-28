import httpRequest from './httpRequest.js';
import Base from './data.js'

/*基础链接头*/
const BaseUrl = "https://douban.uieee.com/v2";


let basename = "?"+Base.Base.name + "=" + Base.Base.value
const Book_Url = BaseUrl + "/book/1220562"
const Count = "?count=50";

const Movie_Soon_Url = BaseUrl + "/movie/coming_soon"
/*正在热映*/
const Movie_Hoting_Url = BaseUrl + "/movie/in_theaters";
/*top250*/
const Movie_UpComming_Url = BaseUrl + "/movie/top250"
/*口碑榜*/
const Movie_Praise_Url = BaseUrl + "/movie/weekly" + basename
/*北美票房榜*/
const Movie_North_Url = BaseUrl + "/movie/us_box"
/*新片榜*/
const Movie_News_Url = BaseUrl + "/movie/new_movies"
/*电影条目信息*/
const Movie_Detail_Url = BaseUrl + '/movie/subject/'
/*电影搜索*/
const Movie_Search_Url = BaseUrl + '/movie/search';

/*图书详情*/
const Book_Detail_Url = BaseUrl + '/book/';


/*apikey*/
const DouBan_ApiKey = '00aefce4d06e0bb7020cf6ae714a2325';

//https://api.douban.com/v2/movie/subject/26004132/photos?apikey=0b2bdeda43b5688921839c8ecb20399b
// https://api.douban.com/v2/movie/subject/26825664/reviews?start=1&count=100&apikey=0df993c66c0c636e29ecbb5344252a4a
const test = BaseUrl + '/book/25902185 '

const getHoting = (params) => httpRequest.httpRequest(Movie_Hoting_Url, params, "");
const getUpComming = (params) => httpRequest.httpRequest(Movie_UpComming_Url, params, "");
const getPhotosList = (params) => httpRequest.httpRequest(Book_Url, params, 'photos');

const getPraise = (params) => httpRequest.httpRequest(Movie_Soon_Url, params, "");
const getNorth = (params) => httpRequest.httpRequest(Movie_North_Url, params, "");
const getNews = (params) => httpRequest.httpRequest(Movie_News_Url, params, "");
const getTest = (params) => httpRequest.httpRequest(test, params, "");


export default {
  Movie_Hoting_Url,
  Movie_UpComming_Url,
  Movie_Detail_Url,
  Movie_Soon_Url,
  Book_Detail_Url,
  getHoting,
  getUpComming,
  getPhotosList,
  getPraise,
  getNorth,
  getNews,
  getTest
}