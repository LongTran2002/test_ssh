import './index.css';
import EligibleCustomersList from './EligibleCustomersList';
import NotEligibleCustomersList from './NotEligibleCustomersList';
import ExistingEligibleCustomersList from './ExitsingEligibleCustomersList';


const App: React.FC = () => {

  return (
    <div>
      <div className="container">
        <div className="EligibleCustomersList">
          <a>Eligible Customers</a>
          <EligibleCustomersList/>
        </div>
        <div className="NotEligibleCustomersList">
          <a>Not Eligible Customers</a>
          <NotEligibleCustomersList/>
        </div>
        <div className="ExistingEligibleCustomersList">
          <a>Existing Eligible Customers</a>
          <ExistingEligibleCustomersList/>
        </div>
      </div>
    </div>
  );
};

export default App;