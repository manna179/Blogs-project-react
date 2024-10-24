import PropTypes from 'prop-types';
import { BsBookmark } from "react-icons/bs";

const Blog = ({blog,handleBookMark,handleMarkAsRead}) => {
    const {id,title,cover,author_img,author,reading_time,posted_date,hashtags}=blog;
    return (
        <div className='mt-10 space-y-4 p-4'>
            <img className='w-full rounded' src={cover} alt={`cover pic of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex gap-2'>
                <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
                <div>
                    <h2 className='text-2xl font-bold'>{author} </h2>
                    <span>{posted_date}</span>
                </div>
                </div>
                <div  className='flex items-center gap-2'>
                    <span>{reading_time} min read </span>
                    <button onClick={()=>handleBookMark(blog)} className='text-2xl text-red-400'><BsBookmark></BsBookmark></button>
                </div>
            </div>
            <h2 className="text-2xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx)=><span key={idx}><a href="">{hash}</a></span>)
                }
            </p>

            <button
            onClick={()=>handleMarkAsRead(id,reading_time)}
            className='text-purple-800 font-bold underline'>mark as read</button>
        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleBookMark:PropTypes.func.isRequired
}
export default Blog;