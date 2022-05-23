import {useStickyPosts} from '../../src/api_minhhieu/stickyPostsApi';
import { SideBarItemSkeleton } from '../Skeleton_minhhieu';
import SideBarItem from './SideBarItem';
import {useRef} from 'react';

function Sidebar() {

    const searchVal = useRef('');

    const { isLoading, error, data, isFetching } = useStickyPosts();

    if (error) return 'An error has occurred: ' + error.message;

    const handleSearch = () => {
        console.log(searchVal.current.value);
    }

    return (
        <div className="left-side">
            {/* Search Bar Start */}
            <div className="search-section">
                <div className="input-group search-bar">
                    <input
                        ref={searchVal}
                        type="text"
                        className="form-control search-input"
                        placeholder="Search"
                    />
                    <button
                        className="input-group-text search-button"
                        id="basic-addon3"
                        onClick={handleSearch}
                    >
                        <i className="fas fa-search text-color"></i>
                    </button>
                </div>
            </div>
            {/* Search Bar End */}

            {/* Popular Post Start */}
            <div className="popular-post mt-4">
                <div className="popular-title">
                    <h3>Popular Posts</h3>
                </div>

                {
                    isLoading
                        ? 
                            Array(5).fill(0).map((item, index) => {
                                return <SideBarItemSkeleton key={index}/>
                            })
                        :
                            data    
                                &&
                                    data.map((item, index) => {
                                        return <SideBarItem key={index} data={[item,index]}/>
                                    })
                }
            </div>
            {/* Popular Post End */}

            {/* Category section Start */}
            <div className="category-section popular-post mt-4">
                <div className="popular-title">
                    <h3>Category</h3>
                </div>
                <ul>
                    <li className="category-box">
                        <a href="blog-left-sidebar.html">
                            <div className="category-product">
                                <div className="cate-shape">
                                    <i className="fas fa-globe text-color"></i>
                                </div>

                                <div className="cate-contain">
                                    <h5 className="text-color">Global</h5>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="category-box">
                        <a href="blog-left-sidebar.html">
                            <div className="category-product">
                                <div className="cate-shape">
                                    <i className="fas fa-building text-color"></i>
                                </div>

                                <div className="cate-contain">
                                    <h5 className="text-color">Business</h5>
                                </div>
                            </div>
                        </a>
                    </li>

                    <li className="category-box">
                        <a href="blog-left-sidebar.html">
                            <div className="category-product">
                                <div className="cate-shape">
                                    <i className="fas fa-play text-color"></i>
                                </div>

                                <div className="cate-contain">
                                    <h5 className="text-color">
                                        Entertainmant
                                    </h5>
                                </div>
                            </div>
                        </a>
                    </li>

                    <li className="category-box">
                        <a href="blog-left-sidebar.html">
                            <div className="category-product">
                                <div className="cate-shape">
                                    <i className="fas fa-tshirt text-color"></i>
                                </div>

                                <div className="cate-contain">
                                    <h5 className="text-color">Sports</h5>
                                </div>
                            </div>
                        </a>
                    </li>

                    <li className="category-box">
                        <a href="blog-left-sidebar.html">
                            <div className="category-product">
                                <div className="cate-shape">
                                    <i className="fas fa-dumbbell text-color"></i>
                                </div>

                                <div className="cate-contain">
                                    <h5 className="text-color">Health</h5>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            {/* Category section End */}
        </div>
    );
}

export default Sidebar;
