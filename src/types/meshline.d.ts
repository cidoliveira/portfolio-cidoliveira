import type * as THREE from "three";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: React.DetailedHTMLProps<
        React.HTMLAttributes<THREE.BufferGeometry>,
        THREE.BufferGeometry
      >;
      meshLineMaterial: React.DetailedHTMLProps<
        React.HTMLAttributes<THREE.Material>,
        THREE.Material
      >;
    }
  }
}
export {};
