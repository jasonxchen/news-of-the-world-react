import { Link } from "react-router-dom";

function ArticleTitleCard(props) {
    return (
        <div className="border rounded shadow hover:text-gray-700 px-2 py-1">
            <Link to={`/articles/${props.index}`}>
                <p>{props.article.title}</p>
            </Link>
        </div>  
    );
}

export default ArticleTitleCard;
