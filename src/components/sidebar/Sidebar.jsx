import { styled, useTheme } from "@mui/material/styles";
import { useState } from "react";
import {
	Box,
	Drawer,
	AppBar,
	Toolbar,
	List,
	CssBaseline,
	Typography,
	Divider,
	IconButton,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import {
	ChevronLeft,
	DepartureBoard,
	ContactPhone,
	BusAlert,
	AccountBox,
	AllInbox,
	GridView,
	OtherHousesOutlined,
} from "@mui/icons-material";

import { NavLink } from "react-router-dom";

import logo from "../../assets/images/main.png";
import img from "../../assets/images/TRANSPORT.png";
import "./Sidebar.css";
import Navbar from "../navbar/Navbar";

const drawerWidth = 240;

const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: "hidden",
});

const closedMixin = (theme) => ({
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: "hidden",
	width: `calc(${theme.spacing(8)} + 1px)`,
});

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

const DrawerComp = styled(Drawer, { shouldForwardProp: (prop) => prop !== "open" })(
	({ theme, open }) => ({
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: "nowrap",
		boxSizing: "border-box",
		...(open && {
			...openedMixin(theme),
			"& .MuiDrawer-paper": openedMixin(theme),
		}),
		...(!open && {
			...closedMixin(theme),
			"& .MuiDrawer-paper": closedMixin(theme),
		}),
	})
);

const Sidebar = () => {
	const theme = useTheme();
	const [open, setOpen] = useState(true);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<Navbar open={open} handleDrawerOpen={handleDrawerOpen} />
			<DrawerComp
				PaperProps={{
					sx: {
						backgroundColor: "rgb(1, 26, 95, 0.7)",
					},
				}}
				variant="permanent"
				open={open}
			>
				<DrawerHeader className="sidebar-container">
					{open && (
						<img
							style={{
								width: "72%",
								margin: "10% auto",
								overflow: "hidden",
							}}
							src={logo}
							alt="brand_logo"
						/>
					)}
					{/* <span><DirectionsBusIcon fontSize="large" className='icon'></DirectionsBusIcon><span className='BusTitle'>DIU BUS TRACKER</span></span> */}

					<IconButton style={{ color: "white" }} onClick={handleDrawerClose}>
						{open && <ChevronLeft />}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<img
					style={{
						width: "100%",
						hight: "50%",
						marginTop: "8px",
						marginBottom: "8px",
						borderRadius: "50%",
						padding: "8%",
					}}
					src={img}
					alt=""
				/>
				<Divider />
				<NavLink className={open ? "bar" : "bar shrink"} to="/">
					<List>
						<ListItem>
							<ListItemIcon>
								<OtherHousesOutlined className="icon" />
							</ListItemIcon>
							<span className={!open ? "pra-hidden pra mt-2 mb-1" : "pra mt-2 mb-1"}>
								Home
							</span>
							<ListItemText />
						</ListItem>
					</List>

					<Divider />
				</NavLink>
				<NavLink className={open ? "bar" : "bar shrink"} to={`/temperature`}>
					<List>
						<ListItem>
							<ListItemIcon>
								<GridView className="icon" />
							</ListItemIcon>
							<span className={!open ? "pra-hidden pra mt-2 mb-1" : "pra mt-2 mb-1"}>
								Dashboard
							</span>
							<ListItemText />
						</ListItem>
					</List>

					<Divider />
				</NavLink>
				<NavLink className={open ? "bar" : "bar shrink"} to={`/weather`}>
					<List>
						<ListItem>
							<ListItemIcon>
								<AllInbox className="icon" />
							</ListItemIcon>
							<p className={!open ? "pra-hidden pra mt-2 mb-1" : "pra mt-2 mb-1"}>
								Inbox
							</p>
							<ListItemText />
						</ListItem>
					</List>

					<Divider />
				</NavLink>
				<NavLink className={open ? "bar" : "bar shrink"} to={`/points`}>
					<List>
						<ListItem>
							<ListItemIcon>
								<AccountBox className="icon" />
							</ListItemIcon>
							<p className={!open ? "pra-hidden pra mt-2 mb-1" : "pra mt-2 mb-1"}>
								Profile
							</p>
							<ListItemText />
						</ListItem>
					</List>

					<Divider />
				</NavLink>
				<NavLink className={open ? "bar" : "bar shrink"} to={`/rawview`}>
					<List>
						<ListItem>
							<ListItemIcon>
								<DepartureBoard className="icon" />
							</ListItemIcon>
							<p className={!open ? "pra-hidden pra mt-2 mb-1" : "pra mt-2 mb-1"}>
								Schedule
							</p>
							<ListItemText />
						</ListItem>
					</List>

					<Divider />
				</NavLink>
				<NavLink className={open ? "bar" : "bar shrink"} to={`/message`}>
					<List>
						<ListItem>
							<ListItemIcon>
								<BusAlert className="icon" />
							</ListItemIcon>
							<p className={!open ? "pra-hidden pra mt-2 mb-1" : "pra mt-2 mb-1"}>
								Transport
							</p>
							<ListItemText />
						</ListItem>
					</List>

					<Divider />
				</NavLink>
				<NavLink className={open ? "bar" : "bar shrink"} to={`/message`}>
					<List>
						<ListItem>
							<ListItemIcon>
								<ContactPhone className="icon" />
							</ListItemIcon>
							<p className={!open ? "pra-hidden pra mt-2 mb-1" : "pra mt-2 mb-1"}>
								Contact
							</p>
							<ListItemText />
						</ListItem>
					</List>

					<Divider />
				</NavLink>

				{/* <Link className="bar" to={`/message`}>
                    <List>

                        <ListItem>
                            <img style={{ width: '70px', marginTop: '20px', borderRadius: '50%', padding: "5%" }}
                                src={user}
                                alt=""
                            />
                            <div class="profile_details">

                                <div class="job_name">
                                    <div class="name">Default user</div>
                                    <div class="job">Default</div>
                                </div>
                            </div>
                            

                        <ListItemText />
                    </ListItem>

                </List>
            </Link>

            <div class="profile_content">
                <div class="profile">
                    <div class="profile_details">

                        <div class="job_name">
                            <div class="name">Default user</div>
                            <div class="job">Default</div>
                        </div>
                    </div>
                    <span class="material-symbols-outlined" id="log_out"> logout </span>
                </div>
            </div> */}
			</DrawerComp>
		</Box>
	);
};

export default Sidebar;
