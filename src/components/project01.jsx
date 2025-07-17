import React from "react";

export const Project01 = (props) => {
  return (
    <div id="project01">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/portfolio/LogicAppFormResponder.png" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Logic App Form Responder</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
                              <a
                  href="https://forms.office.com/Pages/ResponsePage.aspx?id=n4MNJxFb8U-Jmqt9KJQ4a_gUhpDVCRVJikfVBGm0odhUQjlZV0kxTU5UVUw4Vk02MjRYWVNFSEFBRC4u"
                  className="btn btn-custom btn-lg "
                >
                  Try It Out
                </a>
              <h3>Features</h3>
              <div className="list-style">
                <div className="col-lg-12 col-sm-12 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Features1.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                {/* <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Features2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};