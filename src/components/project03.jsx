import React from "react";

export const Project03 = (props) => {
  // ============================================
  // DEMO MODE BUTTON HANDLER
  // Prevents navigation when in demo mode
  // ============================================
  const handleButtonClick = (e) => {
    if (props.isDemoMode) {
      props.onDemoClick(e, 'Project navigation');
    }
    // When isDemoMode is false, the link will work normally
  };

  return (
    <div id="project03">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/portfolio/AIAgentReminderImage.png" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Email Reminder Agent</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              {/* ============================================
                  DEMO MODE CONFIGURATION
                  When isDemoMode = false, this link will navigate normally
                  ============================================ */}
              <a
                href="https://aca-ais-test2-agent-remin-fd.victoriousstone-3f422393.eastus2.azurecontainerapps.io"
                className="btn btn-custom btn-lg "
                target="_blank"
                rel="noreferrer"
                onClick={handleButtonClick}
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

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};