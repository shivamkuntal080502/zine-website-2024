import React, { useState } from "react";
import Image from "next/image";
import Requirements from "../../../images/blog/bee/circuit-ele/image12.png";
import Bulb from "../../../images/blog/bee/circuit-ele/image16.png";
import BulbConnected from "../../../images/blog/bee/circuit-ele/image11.png";
import BulbBattery from "../../../images/blog/bee/circuit-ele/image3.png";
import TwoBulbs from "../../../images/blog/bee/circuit-ele/image25.png";
import ActivePassive from "../../../images/blog/bee/circuit-ele/image21.jpg";
import Symbols from "../../../images/blog/bee/circuit-ele/image9.png";
import JoinTheResistance from "../../../images/blog/bee/circuit-ele/image26.jpg";
import R1R2 from "../../../images/blog/bee/circuit-ele/image10.png";
import Different from "../../../images/blog/bee/circuit-ele/image17.jpg";
import FunFact from "../../../images/blog/bee/circuit-ele/image24.png";
import CarbonFilm from "../../../images/blog/bee/circuit-ele/image19.jpg";
import MetalFilm from "../../../images/blog/bee/circuit-ele/image6.png";
import WireWound from "../../../images/blog/bee/circuit-ele/image2.png";
import SurfaceMount from "../../../images/blog/bee/circuit-ele/image22.jpg";
import Structure from "../../../images/blog/bee/circuit-ele/image5.png";
import FunFactResistor from "../../../images/blog/bee/circuit-ele/image28.gif";
import CapacitorBlast from "../../../images/blog/bee/circuit-ele/image14.gif";
import CapacitorStructure from "../../../images/blog/bee/circuit-ele/image7.png";
import FilmCapacitor from "../../../images/blog/bee/circuit-ele/image1.png";
import YellowFilmCapacitor from "../../../images/blog/bee/circuit-ele/image13.png";
import AxialCapacitor from "../../../images/blog/bee/circuit-ele/image15.gif";
import BigYellowCapacitor from "../../../images/blog/bee/circuit-ele/image4.jpg";
import CeramicCapacitor from "../../../images/blog/bee/circuit-ele/image27.png";
import Mlcc from "../../../images/blog/bee/circuit-ele/image20.png";
import ElectrolyticCapacitor from "../../../images/blog/bee/circuit-ele/image18.jpg";

const CircuitEle = () => {
  return (
    <div className="text-black bg-white w-screen">
      <div className="bg-ee-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
        <div className="pl-32 backdrop-blur-xl">
          <h1 className="text-white text-4xl font-bold">Circuit Elements</h1>
        </div>
      </div>

      <div className="mx-8 md:mx-16 lg:mx-32 mt-8 text-lg">
        <p>
          And the journey starts😀. Let’s start with some conceptual things. So
          in this blog, we will study circuit elements. What are these and where
          do we see them in daily life and robotics?🤔 (Remove all the
          breaklines and use some margin or padding instead.)
        </p>
        <p className="my-8">
          But before starting with circuit elements, do you know what a circuit
          is? A circuit is an arrangement of individual electronic components,
          such as resistors, transistors, capacitors, inductors, and diodes,
          connected by conductive wires or traces through which electric current
          can flow. Now let’s understand this with a hypothetical activity.
        </p>

        <p>1. Required elements:</p>
        <div className="text-center">
          <Image src={Requirements} width={600} height={400} alt="Requirements" />
        </div>

        <p>
          In case you have your real-world LED, switch, battery, and wires, they
          will work better, but if you don’t have them, you can take these
          hypothetical ones. Assume them to be similar to the real-world ones.
        </p>
        <div className="grid grid-cols-12 mt-8">
          <div className="col-span-10">
            <p>
              2. Now, you need to connect a piece of wire to each terminal of
              LED and analyze whether it is a circuit according to the
              definition. Is it a circuit? No, it’s not because it does not make
              a closed path. (The one in red is the positive terminal and the
              one in black is negative)
            </p>
          </div>
          <div className="col-span-2">
            <Image src={Bulb} width={100} height={100} alt="Bulb" />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-3">
            <Image src={BulbConnected} width={150} height={150} alt="Bulb Connected" />
          </div>
          <div className="col-span-7">
            <p>
              Now, connect the end terminals of wire extending from the
              terminals of LED and connect them. Is it a circuit now? Even
              though you have closed the loop, it cannot be called an electric
              circuit because of the absence of the flow of electric current
              since the power source is absent. So, you need to add a power
              source.
            </p>
            <br />
            <p>
              4. Disconnect the wire ends from each other and connect them to
              the battery in a way that the wire from the longer terminal of the
              LED connects to the positive terminal of the battery and that from
              the shorter terminal of the LED must connect to the negative
              terminal of the battery.
            </p>
            <br />
            <p>
              You’ll notice that your LED will start to glow, and voila! You’ve
              created your very first circuit. Now you must be wondering why we
              needed the switch to demonstrate about circuits, we don’t really.
              Our elementary electric circuit is now complete. But we need a
              switch to illustrate some more concepts.
            </p>
          </div>
          <div className="col-span-2 mt-24">
            <Image src={BulbBattery} width={100} height={100} alt="Bulb Battery" />
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-10">
            <p className="mb-8">
              Suppose you connect a switch in series with your circuit, but the
              simple on/off switch can only have two states, on or off, and
              takes only one of them at once.
            </p>
            <div className="text-center">
              <Image src={TwoBulbs} width={300} height={200} alt="Two Bulbs" />
            </div>
          </div>
        </div>
        <p className="border-2 border-solid border-black px-4 mt-8">
          A quick question - would the arrangement still be called a circuit if
          I set the switch in the OFF state? There is no flow of electric
          current, so it defies the definition of a circuit. Try and think by
          yourself! If it is, why? Consider this as an assignment to yourself.
          Contact us with your doubts.
        </p>

        <p className="my-8">
          Now that you know what exactly is a circuit, let’s study the types of
          circuit elements.
        </p>
        <div className="grid grid-cols-2 gap-8 mt-12">
          <div className="col-span-1">
            <Image src={ActivePassive} width={300} height={200} alt="Active Passive" />
          </div>
          <div className="col-span-1">
            <h1 className="text-3xl">Active Circuit Elements</h1>
            <p>The elements that supply energy to the circuit are called active elements.</p>
            <h1 className="text-3xl mt-8">Passive Circuit Elements</h1>
            <p>
              A passive component is an electronic component that cannot
              introduce net energy to the circuit. The definition is really
              simple. In the above circuit, Battery is an Active element and
              Bulbs are Passive. What are some other passive circuit elements
              that we use? Yeah! Resistors, Capacitors, Inductors, Transformers,
              Diodes🙄 all are passive components.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 mt-12 gap-16">
          <div className="col-span-1">
            <p>
              Now try to think of some active components.🤔 Battery…uh...um...battery.🤫 I’m not playing this. Wait, you're here to learn, so, let us tell you. Other than batteries we have...ah… it’s hard to think. A transistor is an active component as well.
            </p>
          </div>
          <div className="col-span-1">
            <Image src={Symbols} width={300} height={200} alt="Symbols" />
          </div>
        </div>

        <h1 className="text-3xl mt-8">Resistors</h1>
        <div className="grid grid-cols-2 mt-12 gap-16">
          <div className="col-span-1">
            <Image src={JoinTheResistance} width={300} height={200} alt="Join The Resistance" />
          </div>
          <div className="col-span-1">
            <p>
              Let’s start with resistors. As the name suggests, it resists the
              current flow in the circuit. Suppose, you have 5 tubes of cold
              drinks, all empty and of similar capacity. Now fill them with 1,
              2, 3, 4, and 5 pebbles respectively and cover the tops with a
              paper having a single hole of the size of a pebble. Now pour the
              water in the tubes at similar rates for similar times. What do you
              observe? The amount of water collected in the container below each
              tube is different. The amount of water collected below the tube
              having a smaller number of pebbles is larger than the amount
              collected in the tube having a larger number of pebbles.
              Hypothetically, the number of pebbles in the tubes is similar to
              the amount of resistance each resistor offers. Higher resistance
              will allow less current to pass through it. Let’s end this
              hypothetical example here because if someone asks you, what a
              resistor is, it should be something like:
            </p>
          </div>
        </div>

        <p className="mt-8 border-2 border-solid border-black px-4">
          An electric component that offers resistance to the flow of electric
          current is called a resistor. The resistance offered is constant in
          all conditions.
        </p>
        <div className="text-center mt-12">
          <Image src={R1R2} width={600} height={400} alt="R1R2" />
        </div>
        <p className="mt-8">
          Now that you have learned about resistors, let’s move to the types of
          resistors.
        </p>

        <div className="grid grid-cols-2 mt-12 gap-16">
          <div className="col-span-1">
            <p>
              As resistors are passive components, they don’t need to be in the
              circuit to perform. They just resist the current flow. There are
              different types of resistors based on material, construction, and
              other parameters. Let’s dive into some common ones.
            </p>
            <p className="mt-4">
              <b>Carbon Film Resistor:</b> These resistors are made by depositing
              a thin layer of carbon film onto an insulating substrate. They
              offer good stability and low noise.
            </p>
            <p className="mt-4">
              <b>Metal Film Resistor:</b> Similar to carbon film resistors but
              with a metal film. They offer better precision and stability.
            </p>
            <p className="mt-4">
              <b>Wire Wound Resistor:</b> Made by winding a metal wire (usually
              nichrome) around an insulating core. They can handle high power.
            </p>
            <p className="mt-4">
              <b>Surface Mount Resistor:</b> These are small resistors used in
              surface-mount technology (SMT). They are designed for automated
              placement on circuit boards.
            </p>
          </div>
          <div className="col-span-1">
            <Image src={Different} width={300} height={200} alt="Different" />
          </div>
        </div>
        <div className="grid grid-cols-2 mt-12 gap-16">
          <div className="col-span-1">
            <Image src={CarbonFilm} width={300} height={200} alt="Carbon Film" />
            <p className="text-center">Carbon Film Resistor</p>
          </div>
          <div className="col-span-1">
            <Image src={MetalFilm} width={300} height={200} alt="Metal Film" />
            <p className="text-center">Metal Film Resistor</p>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-12 gap-16">
          <div className="col-span-1">
            <Image src={WireWound} width={300} height={200} alt="Wire Wound" />
            <p className="text-center">Wire Wound Resistor</p>
          </div>
          <div className="col-span-1">
            <Image src={SurfaceMount} width={300} height={200} alt="Surface Mount" />
            <p className="text-center">Surface Mount Resistor</p>
          </div>
        </div>

        <div className="mt-12">
          <h1 className="text-3xl">Capacitors</h1>
          <div className="grid grid-cols-2 mt-12 gap-16">
            <div className="col-span-1">
              <p>
                Capacitors are another type of passive circuit element. They
                store electrical energy in an electric field. Imagine a water
                tank with two pipes, one for input and one for output. When you
                fill the tank with water (charge the capacitor), it stores the
                water. When you open the output pipe (discharge the capacitor),
                the water flows out. The same happens in a capacitor.
              </p>
            </div>
            <div className="col-span-1">
              <Image src={CapacitorStructure} width={300} height={200} alt="Capacitor Structure" />
            </div>
          </div>
          <p className="mt-8 border-2 border-solid border-black px-4">
            A capacitor is a passive two-terminal electronic component that
            stores electrical energy in an electric field.
          </p>
          <div className="text-center mt-12">
            <Image src={FunFact} width={600} height={400} alt="Fun Fact" />
          </div>
          <p className="mt-8">
            Like resistors, capacitors also have different types based on their
            construction and material.
          </p>
          <div className="grid grid-cols-2 mt-12 gap-16">
            <div className="col-span-1">
              <p>
                <b>Film Capacitor:</b> These capacitors use a thin plastic film
                as the dielectric. They are stable and reliable.
              </p>
              <p className="mt-4">
                <b>Ceramic Capacitor:</b> Made from ceramic materials as the
                dielectric. They have high capacitance values and are used in
                high-frequency applications.
              </p>
              <p className="mt-4">
                <b>Electrolytic Capacitor:</b> These capacitors have a larger
                capacitance than other capacitors. They use an electrolyte as
                the dielectric and are polarized.
              </p>
              <p className="mt-4">
                <b>Supercapacitor:</b> Also known as ultracapacitors, they have
                very high capacitance values and are used for energy storage.
              </p>
            </div>
            <div className="col-span-1">
              <Image src={FilmCapacitor} width={300} height={200} alt="Film Capacitor" />
            </div>
          </div>
          <div className="grid grid-cols-2 mt-12 gap-16">
            <div className="col-span-1">
              <Image src={YellowFilmCapacitor} width={300} height={200} alt="Yellow Film Capacitor" />
              <p className="text-center">Yellow Film Capacitor</p>
            </div>
            <div className="col-span-1">
              <Image src={AxialCapacitor} width={300} height={200} alt="Axial Capacitor" />
              <p className="text-center">Axial Capacitor</p>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-12 gap-16">
            <div className="col-span-1">
              <Image src={BigYellowCapacitor} width={300} height={200} alt="Big Yellow Capacitor" />
              <p className="text-center">Big Yellow Capacitor</p>
            </div>
            <div className="col-span-1">
              <Image src={CeramicCapacitor} width={300} height={200} alt="Ceramic Capacitor" />
              <p className="text-center">Ceramic Capacitor</p>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-12 gap-16">
            <div className="col-span-1">
              <Image src={Mlcc} width={300} height={200} alt="MLCC" />
              <p className="text-center">MLCC</p>
            </div>
            <div className="col-span-1">
              <Image src={ElectrolyticCapacitor} width={300} height={200} alt="Electrolytic Capacitor" />
              <p className="text-center">Electrolytic Capacitor</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h1 className="text-3xl">Inductors</h1>
          <div className="grid grid-cols-2 mt-12 gap-16">
            <div className="col-span-1">
              <Image src={Inductor} width={300} height={200} alt="Inductor" />
            </div>
            <div className="col-span-1">
              <p>
                Inductors are passive components that store energy in a magnetic
                field. They are made of a coil of wire. When current flows
                through the wire, a magnetic field is created around the coil.
                If the current changes, the magnetic field changes, which
                induces a voltage (electromotive force) opposing the change in
                current. This property is called inductance.
              </p>
            </div>
          </div>
          <p className="mt-8 border-2 border-solid border-black px-4">
            An inductor is a passive electronic component that stores energy in
            a magnetic field when electric current flows through it.
          </p>
          <div className="text-center mt-12">
            <Image src={InductorTypes} width={600} height={400} alt="Inductor Types" />
          </div>
          <p className="mt-8">
            Inductors also come in various types based on their core material,
            shape, and application.
          </p>
          <div className="grid grid-cols-2 mt-12 gap-16">
            <div className="col-span-1">
              <p>
                <b>Air Core Inductor:</b> These inductors have no magnetic core,
                just air. They are used in high-frequency applications.
              </p>
              <p className="mt-4">
                <b>Iron Core Inductor:</b> These inductors use iron as the core
                material. They can store more energy and are used in power
                applications.
              </p>
              <p className="mt-4">
                <b>Ferrite Core Inductor:</b> Made using ferrite material as the
                core. They are widely used in electronic circuits for their
                high inductance and low losses.
              </p>
            </div>
            <div className="col-span-1">
              <Image src={AirCore} width={300} height={200} alt="Air Core" />
            </div>
          </div>
          <div className="grid grid-cols-2 mt-12 gap-16">
            <div className="col-span-1">
              <Image src={IronCore} width={300} height={200} alt="Iron Core" />
              <p className="text-center">Iron Core Inductor</p>
            </div>
            <div className="col-span-1">
              <Image src={FerriteCore} width={300} height={200} alt="Ferrite Core" />
              <p className="text-center">Ferrite Core Inductor</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h1 className="text-3xl">Transistors</h1>
          <div className="grid grid-cols-2 mt-12 gap-16">
            <div className="col-span-1">
              <p>
                Transistors are active components and are used to amplify or
                switch electronic signals. They have three terminals: the
                emitter, base, and collector. The small current flowing through
                the base controls the larger current flowing between the
                collector and emitter. Transistors are the building blocks of
                modern electronic devices.
              </p>
            </div>
            <div className="col-span-1">
              <Image src={Transistor} width={300} height={200} alt="Transistor" />
            </div>
          </div>
          <p className="mt-8 border-2 border-solid border-black px-4">
            A transistor is a semiconductor device used to amplify or switch
            electronic signals and electrical power.
          </p>
          <div className="text-center mt-12">
            <Image src={Silicon} width={600} height={400} alt="Silicon" />
          </div>
          <p className="mt-8">
            There are different types of transistors, each with its own
            characteristics and applications.
          </p>
          <div className="grid grid-cols-2 mt-12 gap-16">
            <div className="col-span-1">
              <p>
                <b>Bipolar Junction Transistor (BJT):</b> BJTs are used for
                amplification and switching. They come in two types: NPN and PNP.
              </p>
              <p className="mt-4">
                <b>Field-Effect Transistor (FET):</b> FETs control the flow of
                current using an electric field. They are used in low-power
                applications.
              </p>
              <p className="mt-4">
                <b>MOSFET (Metal-Oxide-Semiconductor FET):</b> A type of FET used
                for switching and amplifying signals. They are widely used in
                digital circuits.
              </p>
            </div>
            <div className="col-span-1">
              <Image src={Bjt} width={300} height={200} alt="BJT" />
            </div>
          </div>
          <div className="grid grid-cols-2 mt-12 gap-16">
            <div className="col-span-1">
              <Image src={Npn} width={300} height={200} alt="NPN" />
              <p className="text-center">NPN Transistor</p>
            </div>
            <div className="col-span-1">
              <Image src={Pnp} width={300} height={200} alt="PNP" />
              <p className="text-center">PNP Transistor</p>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-12 gap-16">
            <div className="col-span-1">
              <Image src={Fet} width={300} height={200} alt="FET" />
              <p className="text-center">Field-Effect Transistor</p>
            </div>
            <div className="col-span-1">
              <Image src={Mosfet} width={300} height={200} alt="MOSFET" />
              <p className="text-center">MOSFET</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h1 className="text-3xl">Diodes</h1>
          <div className="grid grid-cols-2 mt-12 gap-16">
            <div className="col-span-1">
              <Image src={Diode} width={300} height={200} alt="Diode" />
            </div>
            <div className="col-span-1">
              <p>
                Diodes are active components that allow current to flow in one
                direction only. They have two terminals: anode and cathode. When
                the anode is positive with respect to the cathode, the diode is
                forward-biased and conducts current. When the anode is negative,
                the diode is reverse-biased and blocks current. Diodes are used
                for rectification, signal demodulation, and other applications.
              </p>
            </div>
          </div>
          <p className="mt-8 border-2 border-solid border-black px-4">
            A diode is a semiconductor device that allows current to flow in one
            direction only.
          </p>
          <div className="text-center mt-12">
            <Image src={FunFact2} width={600} height={400} alt="Fun Fact" />
          </div>
          <p className="mt-8">
            There are different types of diodes, each serving specific
            functions.
          </p>
          <div className="grid grid-cols-2 mt-12 gap-16">
            <div className="col-span-1">
              <p>
                <b>Light Emitting Diode (LED):</b> These diodes emit light when
                forward-biased. They are used for indication and display
                purposes.
              </p>
              <p className="mt-4">
                <b>Zener Diode:</b> Used for voltage regulation. They allow
                current to flow in the reverse direction when the voltage exceeds
                a certain value.
              </p>
              <p className="mt-4">
                <b>Schottky Diode:</b> Known for their low forward voltage drop
                and fast switching speed. They are used in high-frequency
                applications.
              </p>
            </div>
            <div className="col-span-1">
              <Image src={Led} width={300} height={200} alt="LED" />
            </div>
          </div>
          <div className="grid grid-cols-2 mt-12 gap-16">
            <div className="col-span-1">
              <Image src={Zener} width={300} height={200} alt="Zener" />
              <p className="text-center">Zener Diode</p>
            </div>
            <div className="col-span-1">
              <Image src={Schottky} width={300} height={200} alt="Schottky" />
              <p className="text-center">Schottky Diode</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h1 className="text-3xl">Integrated Circuits</h1>
          <div className="grid grid-cols-2 mt-12 gap-16">
            <div className="col-span-1">
              <p>
                Integrated Circuits (ICs) are miniaturized electronic circuits
                consisting of multiple components such as transistors,
                resistors, capacitors, and diodes integrated onto a single
                semiconductor chip. ICs have revolutionized electronics by
                enabling complex circuits to be built into small packages. They
                are used in almost every electronic device today.
              </p>
            </div>
            <div className="col-span-1">
              <Image src={IC} width={300} height={200} alt="Integrated Circuit" />
            </div>
          </div>
          <p className="mt-8 border-2 border-solid border-black px-4">
            An integrated circuit (IC) is a set of electronic circuits on a small
            chip of semiconductor material, usually silicon.
          </p>
          <div className="text-center mt-12">
            <Image src={IcDesign} width={600} height={400} alt="IC Design" />
          </div>
          <p className="mt-8">
            ICs come in various types based on their function and complexity.
          </p>
          <div className="grid grid-cols-2 mt-12 gap-16">
            <div className="col-span-1">
              <p>
                <b>Analog IC:</b> These ICs process continuous signals. Examples
                include operational amplifiers and voltage regulators.
              </p>
              <p className="mt-4">
                <b>Digital IC:</b> These ICs process digital signals. Examples
                include microcontrollers and digital signal processors.
              </p>
              <p className="mt-4">
                <b>Mixed-Signal IC:</b> These ICs process both analog and digital
                signals. They are used in applications such as data converters.
              </p>
            </div>
            <div className="col-span-1">
              <Image src={AnalogDigital} width={300} height={200} alt="Analog and Digital ICs" />
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h1 className="text-3xl">Conclusion</h1>
          <p className="mt-8">
            Understanding the basic components of electronic circuits is
            essential for anyone interested in electronics. Resistors,
            capacitors, inductors, transistors, diodes, and integrated circuits
            each play a crucial role in the functioning of electronic devices.
            By learning about these components, you gain the foundation needed
            to explore more complex electronic systems and designs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CircuitEle;
