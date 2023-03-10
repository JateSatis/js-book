import React from "react";

//# Components
import LessonSearch from "../components/LessonSearch/LessonSearch";
import Parts from "../components/Parts/Parts";

const MainPage = () => {
  return (
    <section className="main">
      <nav className="main__navigation">
        <div className="width_limiter">
          <h1 className="main__navigation_title mb">
            Современный онлайн учебник по JavaScript
          </h1>
          <p className="main__navigation_text wide-content-text mb">
            В этом учебнике представлено все, что нужно знать современному
            front-end разработчику. Дерзайте!
          </p>
          <LessonSearch></LessonSearch>
          <h3 className="main__navigation_subtitle mb">Содержание</h3>
          <p>Три части учебника посвящены трем важнейшим разделам JavaScript</p>
        </div>
      </nav>
      <Parts></Parts>
    </section>
  );
};

export default MainPage;
