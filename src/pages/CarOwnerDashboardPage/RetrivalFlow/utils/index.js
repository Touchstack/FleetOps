import { z } from "zod"

export const formSchema = z.object({
    registration: z.string().min(1, {
      message: "registration is required",
    }),

    chasis_num: z.string().min(1, {
      message: "chasis number is required",
    }),

    insurance: z.string().min(1, {
      message: "Insurance is required",
    }),

    ending_mileage: z.string().min(1, {
      message: "Mileage is required",
    }),

    road_cert: z.string().min(1, {
      message: "Roadworthy Certificate is required",
    }),

    comment: z.string().min(1, {
      message: "Comment is required",
    }),

  
    hand_over_date: z.string().min(1, {
      message: "Hand over date is required",
    }),

    acceptance_code: z.number().min(1, {
      message: "Acceptance_Code is required",
    }),

    signed_by: z.string().min(1, {
      message: "Acceptance_Code is required",
    }),

    front_lights_high_comment: z.string().optional(),

    reverse_lights_comment: z.string().optional(),

    parking_lights_comment: z.string().optional(),

    front_lights_deem_comment: z.string().optional(),

    indicator_lights_comment: z.string().optional(),

    vehicle_tools_comment: z.string().optional(),

    radio_comments: z.string().optional(),

    warning_triangle_comment: z.string().optional(),

    air_conditioner_comment: z.string().optional(),

    spare_tire_comment: z.string().optional(),

    fire_extinguisher_comment: z.string().optional(),

    road_test_comment: z.string().optional(),

    brake_lights_comment: z.string().optional() ,
    wiper_function_comment: z.string().optional(),
    wheel_caps_comment: z.string().optional(),
    horn_comment: z.string().optional(),

    front_lights: z.boolean({
      invalid_type_error: "must be a boolean",
    }).default(false).optional(),

    reverse_lights: z.boolean({
      invalid_type_error: "must be a boolean",
    }).default(false).optional(),

    wheel_caps: z.boolean({
      invalid_type_error: "must be a boolean",
    }).default(false).optional(),

    parking_lights: z.boolean({
      invalid_type_error: "must be a boolean",
    }).default(false).optional(),

    front_lights_deem: z.boolean({
      invalid_type_error: "must be a boolean",
    }).default(false).optional(),

    indicator_lights: z.boolean({
      invalid_type_error: "must be a boolean",
    }).default(false).optional(),
    
    brake_lights: z.boolean({
      invalid_type_error: "must be a boolean",
    }).default(false).optional(),

    vehicle_tools: z.boolean({
      invalid_type_error: "must be a boolean",
    }).default(false).optional(),

    wiper_function: z.boolean({
      invalid_type_error: "must be a boolean",
    }).default(false).optional(),
 
    radio: z.boolean({
      invalid_type_error: "must be a boolean",
    }).default(false).optional(),

    warning_triangle: z.boolean({
      invalid_type_error: "must be a boolean",
    }).default(false).optional(),

    horn: z.boolean({
      invalid_type_error: "must be a boolean",
    }).default(false).optional(),
    
    air_conditioner: z.boolean({
      invalid_type_error: "must be a boolean",
    }).default(false).optional(),

    spare_tire: z.boolean({
      invalid_type_error: "must be a boolean",
    }).default(false).optional(),

    fire_extinguisher: z.boolean({
      invalid_type_error: "must be a boolean",
    }).default(false).optional(),

    road_test: z.boolean({
      invalid_type_error: "must be a boolean",
    }).default(false).optional(),

  })
