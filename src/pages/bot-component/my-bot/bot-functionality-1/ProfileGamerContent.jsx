import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "@/utils/Assets";

const ProfileGamerContent = () => {
  const [kbName, setKbName] = useState("");
  const [apiToken, setApiToken] = useState("");
  const [fileUploads, setFileUploads] = useState([]);
  const [scrapUrl, setScrapUrl] = useState("");

  const handleSave = () => {
    console.log("Knowledge Base Name:", kbName);
    console.log("File Uploads:", fileUploads);
    console.log("Scraped URL:", scrapUrl);
    console.log("API Token:", apiToken);
    alert("Settings saved successfully!");
  };

  return (
    <Fragment>
      <style>
        {`
          .branding-bg {
            background-image: url('${toAbsoluteUrl("/media/images/2600x1200/bg-5.png")});
          }
          .dark .branding-bg {
            background-image: url('${toAbsoluteUrl("/media/images/2600x1200/bg-5-dark.png")});
          }
        `}
      </style>

      <div className="card min-w-full">
        <div className="card-body">
          <div className="flex flex-col gap-5">
            {/* Knowledge Base Setup */}
            <div className="flex flex-col gap-2">
              <div className="form-group">
                <input
                  type="text"
                  className="form-input"
                  value={kbName}
                  onChange={(e) => setKbName(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap justify-between gap-5">
                <div className="flex flex-col gap-5 max-w-full w-full">
                  <div className="flex flex-col gap-2.5">
                    <label className="checkbox-group ">
                      <input type="checkbox" className="checkbox checkbox-sm" value="1" readOnly />
                      <span className="checkbox-label">Answer Frequently Asked Questions (FAQs)</span>
                    </label>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <label className="checkbox-group">
                      <input type="checkbox" className="checkbox checkbox-sm" value="1" readOnly />
                      <span className="checkbox-label">Help with product/service bookings</span>
                    </label>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <label className="checkbox-group">
                      <input type="checkbox" className="checkbox checkbox-sm" value="1" readOnly />
                      <span className="checkbox-label">Provide personalized recommendation</span>
                    </label>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <label className="checkbox-group">
                      <input type="checkbox" className="checkbox checkbox-sm" value="1" readOnly />
                      <span className="checkbox-label">Track orders or bookings</span>
                    </label>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <label className="checkbox-group">
                      <input type="checkbox" className="checkbox checkbox-sm" value="1" readOnly />
                      <span className="checkbox-label">Send notifications or reminders</span>
                    </label>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <label className="checkbox-group">
                      <input type="checkbox" className="checkbox checkbox-sm" value="1" readOnly />
                      <span className="checkbox-label">Send notifications or reminders</span>
                    </label>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <label className="checkbox-group">
                      <input type="checkbox" className="checkbox checkbox-sm" value="1" readOnly />
                      <span className="checkbox-label">Send notifications or reminders</span>
                    </label>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <label className="checkbox-group">
                      <input type="checkbox" className="checkbox checkbox-sm" value="1" readOnly />
                      <span className="checkbox-label">Send notifications or reminders</span>
                    </label>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <label className="checkbox-group">
                      <input type="checkbox" className="checkbox checkbox-sm" value="1" readOnly />
                      <span className="checkbox-label">Send notifications or reminders</span>
                    </label>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <label className="checkbox-group">
                      <input type="checkbox" className="checkbox checkbox-sm" value="1" readOnly />
                      <span className="checkbox-label">Send notifications or reminders</span>
                    </label>
                  </div>

                  <div className="flex items-center gap-3.5">
                  <input type="checkbox" className="checkbox checkbox-sm" value="1" readOnly />
                  <label className="form-label w-auto">Other functionality 01</label>

                  <input type="text" className="input flex-1 w-full max-w-md" placeholder="Other functinality 01" />
                </div>
                <div className="flex items-center gap-3.5">
                  <input type="checkbox" className="checkbox checkbox-sm" value="1" readOnly />
                  <label className="form-label w-auto">Other functionality 02</label>

                  <input type="text" className="input flex-1 w-full max-w-md" placeholder="Other functinality 02" />
                </div>
                <div className="flex items-center gap-3.5">
                  <input type="checkbox" className="checkbox checkbox-sm" value="1" readOnly />
                  <label className="form-label w-auto">Other functionality 03</label>

                  <input type="text" className="input flex-1 w-full max-w-md" placeholder="Other functinality 03" />
                </div>
                <div className="flex items-center gap-3.5">
                  <input type="checkbox" className="checkbox checkbox-sm" value="1" readOnly />
                  <label className="form-label w-auto">Other functionality 04</label>

                  <input type="text" className="input flex-1 w-full max-w-md" placeholder="Other functinality 04" />
                </div>
                <div className="flex items-center gap-3.5">
                  <input type="checkbox" className="checkbox checkbox-sm" value="1" readOnly />
                  <label className="form-label w-auto">Other functionality 05</label>

                  <input type="text" className="input flex-1 w-full max-w-md" placeholder="Other functinality 05" />
                </div>


                  
                </div>
              </div>
            </div>
 

            {/* Save Button */}
            <div className="flex justify-end">
                      <div className="flex justify-end">
              <Link to="/bot-component/my-bot/bot-functionality-2" className="btn btn-primary text-lg font-medium text-white ">
           Next
        </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export { ProfileGamerContent };
