export default function KpiCard({ title, value, subtitle, color = 'blue' }) {
  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200',
    green: 'bg-green-50 border-green-200',
    purple: 'bg-purple-50 border-purple-200',
    orange: 'bg-orange-50 border-orange-200',
  };

  const textColorClasses = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    purple: 'text-purple-600',
    orange: 'text-orange-600',
  };

  return (
    <div className={`${colorClasses[color]} border rounded-lg p-6`}>
      <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
      <p className={`text-3xl font-bold ${textColorClasses[color]} mt-2`}>{value}</p>
      {subtitle && <p className="text-gray-500 text-xs mt-2">{subtitle}</p>}
    </div>
  );
}
