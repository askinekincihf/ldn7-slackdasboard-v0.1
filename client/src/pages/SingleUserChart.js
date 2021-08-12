import { Line, Bar } from "react-chartjs-2";

const SingleUserChart = (props) => {
	const state = {
		data: {
			labels: props.label,
			datasets: [
				{
					label: "Messages",
					backgroundColor: "green",
					borderColor: "green",
					borderWidth: 1,
					hoverBackgroundColor: "lightGreen",
					hoverBorderColor: "lightGreen",
					data: props.messagesDataSet,
				},

				{
					label: "Reactions",
					backgroundColor: "orange",
					borderColor: "orange",
					borderWidth: 1,
					hoverBackgroundColor: "rgba(255,99,132,0.4)",
					hoverBorderColor: "rgba(255,99,132,1)",
					data: props.reactionsDataSet,
				},
			],
		},
	};
	const options = {
		responsive: true,
		legend: {
			display: false,
		},
		type: "bar",
	};
	return (
		<div className="chart">
			<Line data={state.data} options={options} />
		</div>
	);
};

export default SingleUserChart;
