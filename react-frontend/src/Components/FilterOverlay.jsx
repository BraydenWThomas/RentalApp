import { Button, Container, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "../Styles/Filter.css";

const FilterOverlay = (props) => {
	const [open, setOpen] = props.open;

	return (
		<Modal open={open} onClose={() => setOpen(false)}>
			<Container className="filter-container" maxWidth="sm">
				<div style={{ textAlign: "right" }}>
					<button
						variant="standard"
						className="close-btn"
						onClick={() => {
							setOpen(false);
						}}
					>
						<CloseIcon />
					</button>
				</div>
			</Container>
		</Modal>
	);
};

export default FilterOverlay;
