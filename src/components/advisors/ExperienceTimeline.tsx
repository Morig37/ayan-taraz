import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

export const ExperienceTimeline = () => {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">
            مشاور ارشد مالیاتی
          </Typography>
          <Typography color="text.secondary">
            ۱۳۹۸ - اکنون
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};
