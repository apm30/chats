import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(3, 2),
		margin: '50px'
	},
	flex: {
		display: 'flex',
		alignItems: 'center'
	},
	topicsWindow: {
		width: '30%',
		height: '300px',
		borderRight: '1px solid grey'
	},
	chatWindow: {
		width: '70%',
		height: '300px',
		padding: '20px'
	},
	chatBox: {
		width: '80%'
	},
	button: {
		width: '20%'
	}
}));

const Dashboard = () => {
	const classes = useStyles();
	const [textValue, changeTextValue] = React.useState('');
	return (
		<div>
			<Paper className={classes.root}>
				<Typography variant="h4" component="h4">
					Chat app
				</Typography>
				<Typography variant="h5" component="h5">
					Topic placeholder
				</Typography>
				<div className={classes.flex}>
					<div className={classes.topicsWindow}>
						<List component="nav" aria-label="Main mailbox folders">
							{['asdasd', 'qweqwe'].map(topic => (
								<ListItem key={topic} button>
									<ListItemText primary={topic} />
								</ListItem>
							))}
						</List>
					</div>
					<div className={classes.chatWindow}>
						{[{ from: 'user', message: 'hello' }].map((chat, i) => (
							<div className={classes.flex} key={i}>
								<Chip label={chat.from} className={classes.chip} />
								<Typography variant="p">{chat.message}</Typography>
							</div>
						))}
					</div>
				</div>
				<div className={classes.flex}>
					<TextField
						label="Send a chat"
						className={classes.chatBox}
						value={textValue}
						onChange={e => changeTextValue(e.target.value)}
					/>

					<Button
						variant="contained"
						color="primary"
						className={classes.button}
					>
						Send
					</Button>
				</div>
			</Paper>
		</div>
	);
};

export default Dashboard;
