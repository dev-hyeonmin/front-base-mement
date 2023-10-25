import { Link } from "react-router-dom";

const menus = [
  {
    name: "menu1",
    link: "/"
  },
  {
    name: "menu2",
    link: "/"
  },
  {
    name: "menu3",
    submenu: [
      {
        name: "submenu1",
        link: "/"
      },
      {
        name: "submenu2",
        link: "/"
      },
      {
        name: "submenu3",
        link: "/"
      }
    ]
  },
  {
    name: "menu4",
    link: "/"
  },
  {
    name: "menu5",
    link: "/"
  }
]

const Header = () => {
  return (
    <div className="admin-header">
      <div className="admin-header--logo">
        MEMENT.
      </div>
      
      <nav>
        {menus.map(menu =>
          <div className="admin-menu" key={`menu-${menu.name}`}>
            {menu.link &&
              <Link to={menu.link}>{menu.name}</Link>
            }

            {menu.submenu &&
              <dl>
                <dt>{menu.name}</dt>
                <dd>
                  {menu.submenu.map(sub =>
                    <Link to={sub.link} key={`submenu-${sub.name}`}>{sub.name}</Link>
                  )}
                </dd>
              </dl>
            }
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;