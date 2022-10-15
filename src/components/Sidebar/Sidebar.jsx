import SidebarLayout from "./SidebarLayout";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PersonIcon from "@mui/icons-material/Person";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import "../../styles/Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-homeIcon-container">
        <TwitterIcon className="sidebar-homeIcon" />
      </div>
      <div className="Sidebar">
        <SidebarLayout Icon={HomeIcon} text={`Home`} />
        <SidebarLayout Icon={TagIcon} text={`Explore`} />
        <SidebarLayout Icon={NotificationsIcon} text={`Notifications`} />
        <SidebarLayout Icon={EmailIcon} text={`Messages`} />
        <SidebarLayout Icon={BookmarkBorderIcon} text={`Bookmarks`} />
        <SidebarLayout Icon={ReceiptIcon} text={`Lists`} />
        <SidebarLayout Icon={PersonIcon} text={`Profile`} />
        <SidebarLayout Icon={MoreHorizIcon} text={`More`} />
      </div>
    </div>
  );
};

export default Sidebar;
