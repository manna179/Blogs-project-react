
import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 rounded-lg text-center ml-2 mt-4 pt-4">
            <div>
                <h3 className="text-2xl ">Reading Time: {readingTime} </h3>
            </div>
            <h2 className="text-2xl font-bold">Bookmarked blogs:{bookmarks.length} </h2>
            {
                bookmarks.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks:PropTypes.array.isRequired,
    readingTime:PropTypes.number.isRequired
}
export default Bookmarks;