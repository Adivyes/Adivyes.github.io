import "./Sidebar.css";
import logo from "../../assets/logo.svg"; 

function Sidebar ({ sidebarOpen, closeSidebar }) {
    return (
      <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
        <div className="sidebar__title">
          <div className="sidebar__img">
            
            <a href="https://fuse.io/"><img src={logo} alt="logo" /></a>
            <h1></h1>
          </div>
          <i
            onClick={() => closeSidebar()}
            className="fa fa-times"
            id="sidebarIcon"
            aria-hidden="true"
          ></i>
        </div>
  
        <div className="sidebar__menu">
          
          <h2>APPS</h2>
          <div className="sidebar__link">
            <i className="fa fa-trophy" aria-hidden="true"></i>
            <a href="https://rewards.fuse.io/">LP Rewards</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-refresh"></i>
            <a href="https://fuseswap.com/#/swap">Fuseswap</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-wrench"></i>
            <a href="https://studio.fuse.io/">Studio</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-line-chart"></i>
            <a href="https://staking.fuse.io/">Staking</a>
          </div>
         
          <h2>TOKENS</h2>
          <div className="sidebar__link">
            <i className="fa fa-btc"></i>
            <a href="https://explorer.fuse.io/tokens">All tokens</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-connectdevelop"></i>
            <a href="https://explorer.fuse.io/bridged-tokens">Bridged tokens</a>
          </div>
          
          <h2>TRANSACTIONS</h2>
          <div className="sidebar__link">
            <i className="fa fa-check"></i>
            <a href="https://explorer.fuse.io/txs">Validated</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-clock-o"></i>
            <a href="https://explorer.fuse.io/pending-transactions">Pending</a>
          </div>
         
        </div>
      </div>
    );
  };
  
  export default Sidebar;