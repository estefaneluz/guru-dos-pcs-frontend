import React from 'react';
import './styles.css';
import StarFeedback from '../StarFeedback';

export default function FeedbackQuestion({ question, state, setState }) {

	return (
		<div className="modal-feedback-question">
			<p>{question}</p>
			<div className="feedback-stars-container">
        <StarFeedback value={1} state={state} setState={setState} />
        <StarFeedback value={2} state={state} setState={setState} />
        <StarFeedback value={3} state={state} setState={setState} />
        <StarFeedback value={4} state={state} setState={setState} />
        <StarFeedback value={5} state={state} setState={setState} />
      </div>
		</div>
	);
}
