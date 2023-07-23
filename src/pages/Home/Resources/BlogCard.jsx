const BlogCard = ({blog}) => {
    const {img, title, description} = blog;
    return (
        <div>
           <img className="lg:h-[300px] rounded-sm" src={img} alt="" /> 
           <h4 className="mt-6 text-xl font-semibold">{title}</h4>
           <p className="mt-2 text-sm">{description}</p>
        </div>
    );
};

export default BlogCard;