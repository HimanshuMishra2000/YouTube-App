async function showVideos() {
    let video_div = document.getElementById("videos-d");
    video_div.innerHTML = null;

    let heading = document.createElement("div");
    heading.setAttribute("class", "heading");
    heading.innerHTML = `Most popular in india..`;
    video_div.append(heading);

    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?chart=mostPopular&regionCode=in&part=snippet&key=AIzaSyBv8fRClNH6WjwnakaoekpRMctjA4gyWV8&maxResults=60`
    );
    let data = await res.json();
    // console.log("data:", data);

    let { items } = data;

    items.forEach((el) => {
      let { id } = el;
      let {
        snippet: { title },
      } = el;
      if (id != undefined) {
        let div = document.createElement("div");
        div.innerHTML = `<iframe width="100%" height="280" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p>${title}</p>`;

        video_div.append(div);
      }
    });
  }
  showVideos();
  async function getVideos() {
    let search = document.getElementById("t").value;

    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?q=${search}&key=AIzaSyBv8fRClNH6WjwnakaoekpRMctjA4gyWV8&part=snippet&maxResults=20`
    );
    let data = await res.json();
    // console.log("data:", data);

    let video_div = document.getElementById("videos-s");
    video_div.innerHTML = null;

    let heading = document.createElement("div");
    heading.setAttribute("class", "heading");
    heading.innerHTML = `Search results for ${search}..`;
    video_div.append(heading);

    let { items } = data;

    items.forEach((el) => {
      let {
        id: { videoId },
      } = el;
      let {
        snippet: { title },
      } = el;
      if (videoId != undefined) {
        let div = document.createElement("div");
        div.innerHTML = `<iframe width="100%" height="280" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p>${title}</p>`;
        video_div.append(div);
      }
    });
  }