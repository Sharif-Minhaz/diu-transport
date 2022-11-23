import { styled } from "@mui/material/styles";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { ChevronRight, Menu } from "@mui/icons-material";
import Profile from "../sidebar/Profile";

const drawerWidth = 240;

const AppBarComp = styled(AppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(["width", "margin"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const Navbar = ({ open, handleDrawerOpen }) => {
	return (
		<AppBarComp style={{ background: "rgb(1, 26, 95, 0.7)" }} position="fixed" open={open}>
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					onClick={handleDrawerOpen}
					edge="start"
					sx={{
						Color: "white",
						marginRight: 5,
						...(open && { display: "none" }),
					}}
				>
					<Menu />
				</IconButton>
				<Typography variant="body2" noWrap component="div">
					App <ChevronRight fontSize="small" /> Dashboard
				</Typography>
                <Profile />
			</Toolbar>
		</AppBarComp>
	);
};

export default Navbar;
