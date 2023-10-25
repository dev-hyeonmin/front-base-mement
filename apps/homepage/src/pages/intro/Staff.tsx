const example = [
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
  {

  },
]

export default function Staff() {
  return (
    <div className='intro-content inner staff-content'>
      <div className="staff-list">
        {example.map((staff, staffIndex) =>
          <div className="staff-list-item" key={`staff--${staffIndex}`}>
            <div className="staff-image"></div>
            <div className="staff-position">원장</div>
            <div className="staff-name">홍길동</div>
            <div className="staff-name--eng">Dr. HONG GIL DONG</div>

            <div className="staff-lang">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
