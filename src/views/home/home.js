import { useEffect, useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Main from "../../components/main/main";
import NavBar from "../../components/navbar/navbar";
import SubNavBar from "../../components/navbar/subnavbar";
import { ARTICLES } from "../../data/articles.js";
import "./home.scss";

function Home() {
    const [articles, setArticles] = useState();

    useEffect(() => {
        setArticles(ARTICLES);
    }, [articles]);

    return (
        <div data-testid="Home">
            <nav className="navbar"><NavBar /></nav>
            <nav><SubNavBar /></nav>

            { articles && 
                <div>
                    <Header data-testid="header" sectionName="INFOGRAFIA" article={articles[0]} />
                    <Main articles={articles} />
                    <Header sectionName="ESPACIO PATROCINADO" article={articles[0]} />
                </div>
            }

            <Footer />
        </div>
    );
}

export default Home;
