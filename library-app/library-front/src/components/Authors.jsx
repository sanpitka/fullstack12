import { useQuery } from "@apollo/client/react";
import { ALL_AUTHORS } from "../queries";
import YearForm from "./YearForm";
import PropTypes from "prop-types";

const Authors = (props) => {
  const result = useQuery(ALL_AUTHORS);

  if (!props.show) {
    return null;
  }

  if (result.loading) return <p>Loading...</p>;
  if (result.error) return <p>Error: {result.error.message}</p>;

  const authors = result.data.allAuthors;

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {props.token && (
        <div>
          <YearForm />
        </div>
      )}
    </div>
  );
};

Authors.propTypes = {
  show: PropTypes.bool.isRequired,
  token: PropTypes.string,
};

export default Authors;
