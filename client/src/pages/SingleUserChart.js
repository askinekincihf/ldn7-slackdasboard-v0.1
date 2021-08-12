import { Line, Bar } from "react-chartjs-2";

const SingleUserChart = (props) => {
	const state = {
		data: {
			labels: props.label,
			datasets: [
				{
					label: "Messages",
					backgroundColor: "rgba(255,99,132,0.2)",
					borderColor: "rgba(255,99,132,1)",
					borderWidth: 1,
					hoverBackgroundColor: "rgba(255,99,132,0.4)",
					hoverBorderColor: "rgba(255,99,132,1)",
					data: props.messagesDataSet,
				},

				{
					label: "Reactions",
					backgroundColor: "rgba(155,231,91,0.2)",
					borderColor: "rgba(255,99,132,1)",
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
			<Bar data={state.data} options={options} />
		</div>
	);
};

export default SingleUserChart;
