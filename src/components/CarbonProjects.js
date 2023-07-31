import React,{ useState } from 'react';
import { Layout, Menu, theme ,Collapse} from 'antd';
import '../styles/CarbonProjects.css';
import FOREST from '../assets/FORESTRY AND CONSERVATION.png';
import COMMUNITY from '../assets/COMMUNITY PROJECTS.png';
import RENEWABLE from '../assets/RENEWABLE ENERGY.png';
import WASTE from '../assets/WASTE TO ENERGY.png';



const { Header, Content, Footer } = Layout;
const { Panel } = Collapse;

const CarbonProjects = () => {
  const {token: { colorBgContainer },} = theme.useToken();
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (key) => {
    setActiveItem(key === activeItem ? null : key);
  };  
  return (
    <Collapse accordion activeKey={activeItem} onChange={handleItemClick}>
      <Panel header="FORESTRY AND CONSERVATION" key="1">
        <div className="menu-item">
        <p className="menu-item-content">
          Reforestation and conservation have become very popular offsetting schemes. Credits are created based on either the carbon captured by new trees or the carbon not released through protecting old trees. These projects are based all across the world, from growing forests right here in the UK to replanting mangroves in Madagascar, to “re-wilding” the rainforests of Brazil. 
          Forestry projects are not the cheapest offset option, but they are often chosen for their many benefits outside of the carbon credits they offer. Protecting eco-systems, wildlife, and social heritage is significant for companies offsetting their carbon emissions for the corporate social responsibility (CSR) element.
          There is some grey area in forestry offsetting. In the past, it has been difficult to distinguish just how much carbon is being reduced through forestry projects. Fortunately, thanks to emerging new technologies, methods of sustainable reforestation and calculating the benefits have greatly improved.
        </p>
        <br/>
        <img
            src={FOREST}
            alt="Menu Item 1 Image"
            className="menu-item-image"
          />
        </div>
      </Panel>
      <Panel header="RENEWABLE ENERGY" key="2">
        <div className="menu-item">
          <p className="menu-item-content">
            Renewable energy offsets help to build or maintain chiefly solar, wind or hydro sites across the world. By investing in these projects, a company is boosting the amount of renewable energy on the grid, creating jobs, decreasing reliance on fossil fuels, and bolstering the sector’s global growth.
            Take, for example, The Bokhol Plant in Senegal. This project is one of the largest of its kind in West Africa, providing 160,000 people with access to renewable energy. It also saves the government $5 million a year and creates jobs in the region. Plus, the profits from selling carbon credits are often fed back into local community projects.
          </p>
          <img
            src={RENEWABLE}
            alt="Menu Item 2 Image"
            className="menu-item-image"
          />
        </div>
      </Panel>
      <Panel header="COMMUNITY PROJECTS" key="3">
        <div className="menu-item">
          <p className="menu-item-content">
            Community projects often help to introduce energy-efficient methods or technology to undeveloped communities around the world. There are many potential benefits to these projects that far surpass carbon credits. Projects like this do not only help to make entire regions more sustainable, they can provide empowerment and independence that can lift communities out of poverty. This means that projects that were, at one time, purely philanthropic can now provide organisations with direct benefits like carbon credits.
            For example, the female-led Water, Sanitation and Hygiene (WASH) project in Ethiopia provides clean water to communities by fixing and funding long-term maintenance for boreholes. How does this reduce carbon emissions? Families will no longer have to burn firewood to boil water, which will protect local forests, prevent carbon emissions and reduce indoor smoke pollution. In addition to the health and environmental benefits, the project is managed by female-led committees that provide work to local women.
            The Darfur Sudan Cookstove Project replaced traditional cooking methods like burning wood and charcoal often inside the home, with low smoke stoves in Darfur, Sudan. This works to reduce the damaging health effects and emissions of indoor smoke, as well as the impacts of deforestation. This project also employs women in the region and helps to empower women and girls who now spend less time collecting firewood and cooking.
          </p>
          <img
            src={COMMUNITY}
            alt="Menu Item 3 Image"
            className="menu-item-image"
          />
        </div>
      </Panel>
      <Panel header="WASTE TO ENERGY" key="4">
        <div className="menu-item">
          <p className="menu-item-content">
            A waste to energy project often involves capturing methane and converting it into electricity. Sometimes this means capturing landfill gas, or in smaller villages, human or agricultural waste. In this way, waste to energy projects can impact communities in the same way efficient stoves or clean water can.
            One such project in Vietnam is training locals to build and maintain biogas digesters which turn waste into affordable, clean and sustainable energy. This reduces the methane released into the atmosphere. And helps protect their local forests which would otherwise be depleted through sourcing firewood.
          </p>
          <img
            src={WASTE}
            alt="Menu Item 4 Image"
            className="menu-item-image"
          />
        </div>
      </Panel>
    </Collapse>
  );
};
export default CarbonProjects;