import React, {useState , useEffect} from 'react';
import axios from 'axios';

//Material UI components
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
//---------------------------------------------------------------------------------------

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const ElegibilityComponent = (props) => {
  const [elegibility, setElegibility] = useState([]);
  useEffect(() => {
    const fetchAll = async () => {    
          //Fetch Elegibility
          const elegibilityResult = await axios(
            'https://startup-grant-database-staging.herokuapp.com/api/elegibility' 
          );

        setElegibility(elegibilityResult.data);
    }; 
    fetchAll()
}, []);
    return (
      <Autocomplete
      multiple
      id="checkboxes-eligibility"
      options={elegibility}
      disableCloseOnSelect
      getOptionLabel={option => option.elegibility_name}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.elegibility_name}
        </React.Fragment>
      )}
      style={{ width: '85%', alignContent: 'center' }}
      renderInput={params => (
        <TextField
          {...params}
          variant="outlined"
          label="Elegibility"
          placeholder="Search Elegibility"
          fullWidth
        />
      )}
    />            
  )   
}

export default ElegibilityComponent;