import React from "react";
import ApplyButton from "../search/apply/applyButton";
import './search.css';


const ResultCard = props => {
  const dueDate = props.resultcard.due_date.slice(0, 10);
  return (
    <div className="card-holder">
      <div className="top">
        <h3 className="title">{props.resultcard.grant_title}</h3>
        <div className="apply-button">
          <ApplyButton grant_id={props.resultcard.id} />
        </div>
      </div>
      <p className="description">{props.resultcard.grant_description}</p>
      <div className="due-amount">
        <label className="due-label">Due:</label>
        <p className="due">{dueDate}</p>
        <label className="amount-label">Amount:</label>
        <p className="amount">${props.resultcard.grant_amount}</p>
      </div>

      <div className="elegibility">
        <label className="elegibility-label">Elegibility:</label>
        <div className="elegibility-container">
        {props.resultcard.elegibilities.map((elegibility, i) => {
          return (
            <div key={i} className="elegibility-tags">
              <p>{elegibility}</p>
            </div>
          );
        })}
      </div>
      </div>
      <div className="categories">
        <label className="category-label">Categories: </label>
        <div className="categories-container">
          {props.resultcard.categories.map((categories, i) => {
            return (
                <div key={i} className="category-tags">
                  <p className="p-element">{categories}</p>
                </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
