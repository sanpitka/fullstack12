import { useState } from "react";
import PropTypes from "prop-types";
import { useMutation } from "@apollo/client/react";
import { CREATE_BOOK, ALL_BOOKS, ALL_AUTHORS } from "../queries";
import { updateCache } from "./cache";

const NewBook = ({show, setError, setSuccess, setPage}) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [published, setPublished] = useState("");
  const [genre, setGenre] = useState("");
  const [genres, setGenres] = useState([]);

  const [createBook] = useMutation(CREATE_BOOK, {
    refetchQueries: [{ query: ALL_AUTHORS }],
    awaitRefetchQueries: true,
    onError: (error) => {
      setError(error.message);
    },
    onCompleted: () => {
      setSuccess(`Book added successfully!`);
    },
    update: (cache, response) => {
      updateCache(cache, { query: ALL_BOOKS }, response.data.addBook);
    }
  });

  if (!show) {
    return null;
  }

  const submit = async (event) => {
    event.preventDefault();

    await createBook({
      variables: { title, author, published: Number(published), genres },
    });

    setTitle("");
    setPublished("");
    setAuthor("");
    setGenres([]);
    setGenre("");
    setPage('books');
  };

  const addGenre = () => {
    setGenres(genres.concat(genre));
    setGenre("");
  };

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          title
          <input
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          author
          <input
            value={author}
            onChange={({ target }) => setAuthor(target.value)}
          />
        </div>
        <div>
          published
          <input
            type="number"
            value={published}
            onChange={({ target }) => setPublished(target.value)}
          />
        </div>
        <div>
          <input
            value={genre}
            onChange={({ target }) => setGenre(target.value)}
          />
          <button onClick={addGenre} type="button">
            add genre
          </button>
        </div>
        <div>genres: {genres.join(" ")}</div>
        <button type="submit">create book</button>
      </form>
    </div>
  );
};

NewBook.propTypes = {
  show: PropTypes.bool.isRequired,
  setError: PropTypes.func.isRequired,
  setSuccess: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default NewBook;
