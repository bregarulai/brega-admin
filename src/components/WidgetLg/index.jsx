import React from "react";
import "./widgetLg.css";

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgBtn " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg"
              alt="user"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Tim Medrano</span>
          </td>
          <td className="widgetLgDate">Jul 3 2021</td>
          <td className="widgetLgAmount">$342.15</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg"
              alt="user"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Tim Medrano</span>
          </td>
          <td className="widgetLgDate">Jul 3 2021</td>
          <td className="widgetLgAmount">$342.15</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg"
              alt="user"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Tim Medrano</span>
          </td>
          <td className="widgetLgDate">Jul 3 2021</td>
          <td className="widgetLgAmount">$342.15</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg"
              alt="user"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Tim Medrano</span>
          </td>
          <td className="widgetLgDate">Jul 3 2021</td>
          <td className="widgetLgAmount">$342.15</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg"
              alt="user"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Tim Medrano</span>
          </td>
          <td className="widgetLgDate">Jul 3 2021</td>
          <td className="widgetLgAmount">$342.15</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
