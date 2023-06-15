import React from "react";
import './movies.css';

 const movies = [
     {
       title: "Ramayana - The Legend of Prince Rama",
       href: "https://www.youtube.com/watch?v=wokP6NeP0O0",
       src: "https://i.ytimg.com/vi/U8xm0CDcUNM/maxresdefault.jpg"
     },
     {
       title: "Return Of Hanuman",
       href: "https://www.youtube.com/watch?v=SIR5utAOnlQ",
       src: "https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/8657/1398657-i-08905034e560"
     },
     {
       title: "Bal Ganesh",
       href: "https://www.youtube.com/watch?v=Gvi4uUj9o18",
       src: "https://wallpapers.com/images/featured-full/bal-ganesh-soz81v2d6iy90q5i.jpg"
     },
     {
       title: "Little Krishna - Manmohana",
       href: "https://www.youtube.com/watch?v=Q-qcB_OqKTU",
       src: "https://m.media-amazon.com/images/I/71S+JAGZogL._RI_SX480_FMwebp_.jpg"
     },
     {
       title: "Dashavatar",
       href: "https://www.youtube.com/watch?v=s-p_CxXMBUg",
       src: "https://kreately.in/wp-content/uploads/2021/10/Dashavatar.jpeg"
     }
  ];

  //Function
   function ShowMovies() {
      return (
        <center>
          <div>
            {movies.map(m => (
              <div key={m.title}>
                <h1>{m.title}</h1>
                <img src={m.src} alt={m.title} width="500px" height="300px" /><br/>
                <a href={m.href} target="_blank">Click Here to Watch</a>
              </div>
            ))}
          </div>
        </center>
      );
   }
  
  
export default ShowMovies;