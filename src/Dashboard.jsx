import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(3, 2),
		margin: '50px'
	}
}));

const Dashboard = () => {
	const classes = useStyles();
	return (
		<div>
			<Paper className={classes.root}>
				<Typography variant="h3" component="h3">
					Chat app
				</Typography>
				<Typography variant="h5" component="h5">
					Topic placeholder
				</Typography>
			</Paper>
		</div>
	);
};

export default Dashboard;
