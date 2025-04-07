import { Card, CardContent, Typography } from '@mui/material';

const ArticleCard = ({ title, summary }) => (
  <Card variant="outlined" sx={{ mb: 2 }}>
    <CardContent>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="body1" color="text.secondary">
        {summary}
      </Typography>
    </CardContent>
  </Card>
);

export default ArticleCard;
