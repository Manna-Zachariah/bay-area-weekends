const plannerOptions = {
  regions: [
    {
      value: 'coast',
      label: 'Coast',
      destinations: [
        { value: 'big-sur', label: 'Big Sur' },
        { value: 'santa-cruz', label: 'Santa Cruz' },
        { value: 'half-moon-bay', label: 'Half Moon Bay' },
      ],
    },
    {
      value: 'wine',
      label: 'Wine',
      destinations: [
        { value: 'napa-valley', label: 'Napa Valley' },
        { value: 'sonoma', label: 'Sonoma' },
      ],
    },
    {
      value: 'nature',
      label: 'Nature',
      destinations: [
        { value: 'monterey', label: 'Monterey' },
        { value: 'point-reyes', label: 'Point Reyes' },
        { value: 'lake-tahoe', label: 'Lake Tahoe' },
      ],
    },
    {
      value: 'other',
      label: 'Other',
      destinations: [],
    },
  ],
  tripLengths: [
    { value: 'day-trip', label: 'Day trip' },
    { value: 'one-night', label: 'One night' },
    { value: 'two-nights', label: 'Two nights' },
  ],
  tripFocuses: [
    { value: 'scenic-drive', label: 'Scenic drive' },
    { value: 'food-and-drink', label: 'Food and drink' },
    { value: 'outdoor-time', label: 'Outdoor time' },
    { value: 'slow-weekend', label: 'Slow weekend' },
  ],
};

export default plannerOptions;