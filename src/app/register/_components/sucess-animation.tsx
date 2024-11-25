export default function RegistrationSuccess() {
  return (
    <>
      <svg height={48} width={48} viewBox="0 0 52 52">
        <circle
          className="checkmark__circle"
          cx="26"
          cy="26"
          r="25"
          fill="none"
          style={{
            stroke: "#000",
            strokeWidth: "2",
            strokeMiterlimit: "10",
            animation: "stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards",
          }}
        />
        <path
          className="checkmark__check"
          fill="none"
          d="M14.1 27.2l7.1 7.2 16.7-16.8"
          style={{
            transformOrigin: "50% 50%",
            stroke: "#000",
            strokeWidth: "3",
            strokeLinecap: "round",
            animation:
              "stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards",
          }}
        />
      </svg>
      <style jsx>{`
        @keyframes stroke {
          100% {
            stroke-dashoffset: 0;
          }
        }
        .checkmark__circle {
          stroke-dasharray: 166;
          stroke-dashoffset: 166;
        }
        .checkmark__check {
          stroke-dasharray: 48;
          stroke-dashoffset: 48;
        }
      `}</style>
    </>
  );
}
