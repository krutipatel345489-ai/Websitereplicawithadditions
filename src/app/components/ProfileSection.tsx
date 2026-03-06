export function ProfileSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div>
        {/* Profile Information */}
        <div>
          <div className="mb-12">
            <h2 className="text-4xl font-normal text-gray-900 mb-2">Kruti Patel, MD</h2>
            <p className="text-lg text-gray-700">Resident, Class of 2028</p>
            <p className="text-lg text-gray-700">Department of Dermatology</p>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-2xl font-normal text-gray-900 mb-6">About</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Dr. <strong>Kruti Patel</strong> grew up in Hoffman Estates, IL and completed her undergraduate studies at the University of Illinois at Urbana-Champaign. She received her medical degree from Northwestern University.
              </p>
              <p>
                Outside of medicine, Dr. Patel enjoys writing, travel, fitness, and exploring Chicago's restaurant and café scene.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}