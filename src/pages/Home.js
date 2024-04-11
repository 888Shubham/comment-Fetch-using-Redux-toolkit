import { useEffect } from "react";
import {useDispatch} from "react-redux"
import { List } from "../components/List";
import { commentAction } from "../redux/reducers/commentsReducer";
// import comments actions here

export const Home = () => {
  const dispatch = useDispatch();
  const getComments = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const data = await response.json();
      dispatch(commentAction.fulfilled(data));
      // dispatch fetch success action here
    } catch (e) {
      // dispatch fetch error action here
      dispatch(commentAction.rejected());
    }
  };

  useEffect(() => {
    dispatch(commentAction.pending());
    // dispatch fetch start action here
    // execute the getComments function here
    getComments()
  }, []);

  return (
    <div className="home">
      <h3>Internet Comments</h3>
      <List />
    </div>
  );
};
