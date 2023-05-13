import React from "react";

//# Components
import LessonSearch from "../components/LessonSearch/LessonSearch";
import Parts from "../components/Parts/Parts";

const MainPage = () => {
  return (
    <section className="main">
      <nav className="main__navigation">
        <div className="main__navigation_height-manager width_limiter">
          <h1 className="main__navigation_title">
            Современный онлайн учебник для изучения ООП
          </h1>
          <p className="main__navigation_text wide-content-text">
            В этом учебнике представлено все, что нужно знать современному
            front-end разработчику. Дерзайте!
          </p>
          <LessonSearch></LessonSearch>
          <h3 className="main__navigation_subtitle wide-content-text">
            Содержание
          </h3>
          <p className="wide-content-text">
            Три части учебника посвящены трем важнейшим разделам JavaScript
          </p>
        </div>
      </nav>
      <Parts></Parts>
    </section>
  );
};

export default MainPage;
