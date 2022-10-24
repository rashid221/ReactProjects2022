import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Watchnow from "./Watchnow";
import Spinner from "./Spinner";
// import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from "react-top-loading-bar";

const News = (props) => {
  const [articles, setArt] = useState();
  const [total, setTotal] = useState();
  const [prev, setPrev] = useState(1);
  const [spin, setSpin] = useState(false);
  const [progress, setProgress] = useState(10);

  async function updateNews() {
    setProgress(10);
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${
        props.apikey
      }&page=${prev - 1}&pageSize=${props.pageSize}`
    );
    setSpin(true);
    setProgress(100);
    let parseData = await data.json();
    setSpin(false);
    console.log(parseData);
    setArt(parseData.articles);
    setTotal(parseData.totalResults);
  }

  useEffect(() => {
    async function dataFech() {
      updateNews();
    }
    dataFech();
  }, []);
  const prevHandle = async () => {
    setPrev(prev - 1);
    updateNews();
  };
  const nextHandle = async () => {
    if (prev + 1 > Math.ceil(total / 5)) {
    } else {
      setPrev(prev + 1);
      updateNews();
    }
  };

  const [classes, setClasses] = useState();

  const removeClass = () => {
    document.body.classList.remove(
      "yellows",
      "greens",
      "reds",
      "blues",
      "oranges",
      "whites"
    );
  };
  const toggleMode = (cls) => {
    removeClass();
    document.body.classList.add(cls);
  };
  const handle = () => {
    let clr = false;
    if (!clr) {
      setClasses("reject");
    } else {
      setClasses("center-cont");
    }
  };
  const fetchMoreData = () => {
    setPrev(prev + 1);
    updateNews();
  };
  // const progressHandler = ()=>{
  //   setProgress(progress)
  // }
  return (
    <>
      <div className="main-content">
        <Navbar mode={toggleMode} />
        <LoadingBar
          height={4}
          color="#f11946"
          progress={progress}
          onLoaderFinished={() => setProgress(progress)}
        />

        <div className="center-cont">
          <div className="bat-set">
            <h1>
              News 24/7<span>Around the World at one glance</span>
            </h1>
            <div>
              <button
                type="button"
                className={classes}
                onClick={() => handle()}
              >
                Live
              </button>
              <button type="button" className="reject">
                Watch Later
              </button>
            </div>

            {spin && <Spinner alts="spins" />}
          </div>
          <div>
            {/* <InfiniteScroll
              dataLength={articles.length}
              next={fetchMoreData}
              hasMore={articles.length !== total}
              loader={<h4><Spinner />Loading...</h4>}
              >
          { */}
            {articles?.map((elements) => (
              <Watchnow
                key={elements.url}
                title={elements.title}
                description={elements.description}
                imageUrl={elements.urlToImage}
                sourceName={elements.source.name}
                readM={elements.url}
                autM={elements.author}
                date={elements.publishedAt}
              />
            ))}
            {/* </InfiniteScroll> */}
          </div>
          <div>
            <button
              disabled={prev <= 1}
              style={prev <= 1 ? { color: "black" } : { color: "green" }}
              onClick={prevHandle}
            >
              &larr; Previous
            </button>
            <button
              disabled={prev + 1 > Math.ceil(total / 5)}
              style={
                prev + 1 > Math.ceil(total / 5)
                  ? { color: "black" }
                  : { color: "green" }
              }
              onClick={nextHandle}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default News;
