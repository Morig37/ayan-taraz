import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { Paper, Typography } from '@mui/material';

export const AuditTrail = () => {
  return (
    <Paper sx={{ p: 3 }}>
      <Timeline>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6">Document Updated</Typography>
            <Typography color="textSecondary">Today 2:30 PM</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Paper>
  );
};
