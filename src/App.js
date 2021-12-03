import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { items } from './items/items';
import './App.css';

function App() {
  console.log(items);
  return (
    <div className='customer-profile'>
      {/* ------------NPS score ---------------- */}

      <div className='average-nps'>
        <div className='icon'>Smiley</div>
        <div className='nps-text'>
          <h3 className='top-text'>Average NPS score</h3>
          <span className='bottom-text'>100</span>
        </div>
      </div>

      {/* -----------Customer information ---------- */}

      <div className='customer-information'>
        <h3 className='customer-information__header'>Customer Information</h3>
        <span>Down</span>
      </div>

      {/* -----------Transaction details ---------- */}

      <div className='transaction-details'>
        <h3 className='transaction-details__header rule'>Transaction Details</h3>
        <hr />
        <div className='transaction-info'>
          <span>21 October 5:00pm</span>
          <span>Transacted at Bank Hall</span>
          <span>Kes 4,500</span>
          <span>Up</span>
        </div>

        <div className='breakdown'>
          <h3>Full Breakdown</h3>
          <div className='transaction-charts'>
            <div className='chart rating'></div>
            <div className='chart spend'></div>
            <div className='chart segments'></div>
          </div>
        </div>

        <div className='transaction-details-two'>
          <div className='transaction-info'>
            <span>21 October 5:00pm</span>
            <span>Transacted at Bank Hall</span>
            <span>Kes 4,500</span>
            <span>Up</span>
          </div>
        </div>
        <hr />

        <div className='transaction-details-three'>
          <div className='transaction-info'>
            <span>21 October 5:00pm</span>
            <span>Transacted at Bank Hall</span>
            <span>Kes 4,500</span>
            <span>Up</span>
          </div>
        </div>
        <hr />
      </div>

      <div className='custom-attributes'>
        <div className='custom-attributes-header'>
          <h3>Custom Attributes</h3>
          <span>Up</span>
        </div>
        <div className='attribute-cards'>
          <div className='attribute-card'>
            <span>Branch</span>
            <span>Kapenguria</span>
          </div>
          <div className='attribute-card'>
            <span>Branch</span>
            <span>Kapenguria</span>
          </div>
          <div className='attribute-card'>
            <span>Branch</span>
            <span>Kapenguria</span>
          </div>
          <div className='attribute-card'>
            <span>Branch</span>
            <span>Kapenguria</span>
          </div>
          <div className='attribute-card'>
            <span>Branch</span>
            <span>Kapenguria</span>
          </div>
          <div className='attribute-card'>
            <span>Branch</span>
            <span>Kapenguria</span>
          </div>
          <div className='attribute-card'>
            <span>Branch</span>
            <span>Kapenguria</span>
          </div>
          <div className='attribute-card'>
            <span>Branch</span>
            <span>Kapenguria</span>
          </div>
        </div>
      </div>

      <div className='custom-events'>
        <div className='custom-events-header'>
          <h3>Custom Events</h3>
          <span>Up</span>
        </div>
        <div className='attribute-events'>
          <div className='attribute-event'>
            <span>Branch</span>
            <span>Kapenguria</span>
          </div>
          <div className='attribute-event'>
            <span>Branch</span>
            <span>Kapenguria</span>
          </div>
          <div className='attribute-event'>
            <span>Branch</span>
            <span>Kapenguria</span>
          </div>
          <div className='attribute-event'>
            <span>Branch</span>
            <span>Kapenguria</span>
          </div>
          <div className='attribute-event'>
            <span>Branch</span>
            <span>Kapenguria</span>
          </div>
          <div className='attribute-event'>
            <span>Branch</span>
            <span>Kapenguria</span>
          </div>
          <div className='attribute-event'>
            <span>Branch</span>
            <span>Kapenguria</span>
          </div>
          <div className='attribute-event'>
            <span>Branch</span>
            <span>Kapenguria</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
