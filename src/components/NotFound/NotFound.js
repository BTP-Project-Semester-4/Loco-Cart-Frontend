import React from "react";

class NotFound extends React.Component {
  render() {
    window.onload = function () {
      if (!window.location.hash) {
        window.location = window.location + "#loaded";
        window.location.reload();
      }
    };
    return (
      <div style={{ textAlign: "center" }}>
        <h1>(๑•́ㅿ•̀๑)</h1>
        <h1>Sorry!</h1>
        <h1>404 Not Found</h1>
        <h2>
          Either you aren't cool enough to visit this page or it doesn't exist{"  "}
          <em>. . . </em>
        </h2>
      </div>
    );
  }
}

export default NotFound;
