import { Link } from "react-router-dom";

export default function List() {
    return <div>
        <h3>List of Blogs</h3>
        <Link to='/pages/blog/helix-ai-intro'>Helix AI Introduction</Link>
        <br />
        <Link to='/pages/blog/helix-ai-write'>Helix AI Write</Link>
        <br />
        <Link to='/pages/blog/helix-ai-3rdblog'>Helix 3rd Blog</Link>
    </div>
}