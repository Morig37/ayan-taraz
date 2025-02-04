import { List, ListItem, ListItemText, ListItemIcon, Chip } from '@mui/material';
import ShowChartIcon from '@mui/icons-material/ShowChart';

export const InvestmentSuggestions = () => {
  return (
    <List>
      {suggestions.map((suggestion, index) => (
        <ListItem key={index}>
          <ListItemIcon>
            <ShowChartIcon color="primary" />
          </ListItemIcon>
          <ListItemText 
            primary={suggestion.title}
            secondary={suggestion.description}
          />
          <Chip 
            label={`${suggestion.confidence}% Match`}
            color="primary"
            variant="outlined"
          />
        </ListItem>
      ))}
    </List>
  );
};
